import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import FormInput from 'components/reusables/form-group/form-input/form-input.component';
import FormSelect from 'components/reusables/form-group/form-select/form-select.component';
import PrimaryButton from 'components/reusables/button/primary-button/primary-button.component';
import SpinnerContainer from 'components/reusables/spinner/spinner.component';
import FormMultiSelect from 'components/reusables/form-group/form-multiselect/form-multiselect.component';
import FormFile from 'components/reusables/form-group/form-file/form-file.component';

import { selectCurrentUser } from 'shares/store/user/user.selector';

import { DashboardProductCreateContext } from 'shares/contexts/dashboard-product-create.context';

import { httpPostProduct } from 'shares/hooks/requests/products/products.hook';
import { httpUploadImages } from 'shares/hooks/requests/images/images.hook';
import { addProductToProducts } from 'shares/store/shop/shop.action';

import {
  selectCategories,
  selectProducts,
} from 'shares/store/shop/shop.selector';
import { httpGetCategory } from 'shares/hooks/requests/categories/category-requests.hook';

const ProductCreateForm = () => {
  const { handleSubmit, control, reset, watch } = useForm({
    defaultValues: {
      title: '',
      description: '',
      price: 0,
      color: '',
      brand: '',
      shipping: '',
      quantity: '',
      categoryId: '',
      subCategoriesId: null,
      images: null,
    },
  });

  const watchCategoryId = watch('categoryId');

  const {
    product,
    setProduct,
    subCategories,
    setSubCategories,
    isCreating,
    setIsCreating,
  } = useContext(DashboardProductCreateContext);

  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      setIsCreating(true);

      const imagesLocation = await httpUploadImages({
        images: data.images,
        accessToken: admin.accessToken,
      });

      data.images = imagesLocation;

      const newProduct = await httpPostProduct({
        product: data,
        accessToken: admin.accessToken,
      });
      dispatch(addProductToProducts(newProduct, products));
      reset();
      toast.success('Create successfully');
    } catch (errors) {
      console.log(errors);
      errors.forEach((error) => {
        toast.error(error.message);
      });
    } finally {
      setIsCreating(false);
    }
  };

  const onError = (error) => {
    console.warn(error);
    toast.error('Please fill all the required fields');
  };

  useEffect(() => {
    const populateSubCategories = async () => {
      const category = await httpGetCategory({
        _id: watchCategoryId,
        subCategories: true,
      });
      setSubCategories(category.subcategories);
    };

    populateSubCategories();
  }, [watchCategoryId, setSubCategories]);

  return (
    <Form className="mb-5" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormInput
        name="title"
        type="text"
        label="Title"
        id="title"
        defaultValue=""
        rules={{ required: true }}
        control={control}
      />

      <FormInput
        name="description"
        type="text"
        label="Description"
        id="description"
        as="textarea"
        defaultValue=""
        rules={{ required: true }}
        control={control}
      />

      <FormInput
        name="price"
        type="number"
        id="price"
        label="Price"
        min="0"
        defaultValue=""
        rules={{ required: true }}
        control={control}
      />

      <FormFile
        name="items"
        id="items"
        label="Images"
        defaultValue=""
        item={product}
        setItem={setProduct}
        control={control}
      />
      <FormInput
        name="quantity"
        type="number"
        id="quantity"
        label="Quantity"
        min="0"
        defaultValue=""
        rules={{ required: true }}
        control={control}
      />

      <FormSelect
        name="color"
        label="Color"
        id="color"
        defaultValue=""
        rules={{ required: true }}
        control={control}
      >
        <option value="">--Select color--</option>
        <option value="Black">Black</option>
        <option value="Brown">Brown</option>
      </FormSelect>

      <FormSelect
        name="brand"
        label="Brand"
        id="brand"
        defaultValue=""
        rules={{ required: true }}
        control={control}
      >
        <option value="">--Select brand--</option>
        <option value="Chanel">Chanel</option>
        <option value="Prada">Prada</option>
      </FormSelect>

      <FormSelect
        label="Shipping"
        name="shipping"
        id="shipping"
        defaultValue=""
        rules={{ required: true }}
        control={control}
      >
        <option value="">--Select shipping--</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </FormSelect>

      <FormSelect
        label="Categories"
        name="categoryId"
        id="category"
        defaultValue=""
        rules={{ required: true }}
        control={control}
      >
        <option value="">--Select category--</option>
        {categories.map((category, index) => (
          <option key={index} value={category._id}>
            {category.name}
          </option>
        ))}
      </FormSelect>

      <FormMultiSelect
        name="subCategoriesId"
        id="sub-categories"
        rules={{ required: true }}
        defaultValue=""
        options={subCategories?.map((subCategory) => ({
          value: subCategory._id,
          label: subCategory.name,
        }))}
        control={control}
      />

      <PrimaryButton
        variant="outline-secondary"
        type="submit"
        disabled={isCreating}
      >
        {!isCreating ? 'Create' : 'Creating...'}
      </PrimaryButton>

      <SpinnerContainer className="ms-2" isProcess={isCreating} />
    </Form>
  );
};

export default ProductCreateForm;
