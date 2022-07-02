import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import FormInput from 'components/reusables/form-group/form-input/form-input.component';
import FormSelect from 'components/reusables/form-group/form-select/form-select.component';
import PrimaryButton from 'components/reusables/button/primary-button/primary-button.component';
import SpinnerContainer from 'components/reusables/spinner/spinner.component';
import FormMultiSelect from 'components/reusables/form-group/form-multiselect/form-multiselect.component';
import FormImages from 'components/reusables/form-group/form-images/form-images.component';

import { selectCurrentUser } from 'shares/store/user/user.selector';

import { DashboardProductCreateContext } from 'shares/contexts/dashboard-product-create.context';

import { addProductToProductsAsync } from 'shares/store/products/products.action';

import { selectCategories } from 'shares/store/categories/categories.selector';
import {
  selectIsProductCreating,
  selectProducts,
} from 'shares/store/products/products.selector';

import { httpGetCategory } from 'shares/hooks/requests/categories/category-requests.hook';
import { resizeImages } from 'shares/utils/react-image-file-resizer/react-image-file-resizer.utils';

const ProductCreateForm = () => {
  const {
    product,
    setProduct,
    INITIAL_PRODUCT_STATE,
    subCategories,
    setSubCategories,
  } = useContext(DashboardProductCreateContext);

  const {
    title,
    description,
    price,
    images,
    quantity,
    color,
    shipping,
    categoryId,
    brand,
    subCategoriesId,
  } = product;

  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);
  const isCreating = useSelector(selectIsProductCreating);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !price ||
      !quantity ||
      !color ||
      !shipping ||
      !categoryId ||
      !brand ||
      images.length === 0 ||
      subCategoriesId.length === 0
    ) {
      toast.error('Please fill all required fields');
      return;
    }
    try {
      dispatch(
        addProductToProductsAsync({
          productToAdd: product,
          products,
          images,
          accessToken: admin.accessToken,
        }),
      );
      setProduct(INITIAL_PRODUCT_STATE);
      toast.success('Create successfully');
    } catch (errors) {
      errors.forEach((error) => {
        toast.error(error.message);
      });
    }
  };

  const handleGenericChange = (e) => {
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });
  };

  const handleChooseCategory = async (e) => {
    const category = await httpGetCategory({
      param: e.target.value,
      subCategories: true,
    });
    setProduct({ ...product, categoryId: e.target.value });
    setSubCategories(category.subcategories);
  };

  const handleResizeImage = async (e) => {
    const resizedImages = await resizeImages(Array.from(e.target.files));

    setProduct({ ...product, images: resizedImages });
  };

  return (
    <Form
      className="mb-5"
      onSubmit={handleSubmit}
      onChange={handleGenericChange}
    >
      <FormInput
        name="title"
        type="text"
        label="Title"
        id="title"
        value={title}
        onChange={() => {}}
      />

      <FormInput
        name="description"
        type="text"
        label="Description"
        id="description"
        as="textarea"
        value={description}
        onChange={() => {}}
      />

      <FormInput
        name="price"
        type="number"
        id="price"
        label="Price"
        min="0"
        step="0.01"
        value={price}
        onChange={() => {}}
      />

      <FormImages
        name="images"
        id="images"
        label="Images"
        values={images}
        onChange={handleResizeImage}
      />
      <FormInput
        name="quantity"
        type="number"
        id="quantity"
        label="Quantity"
        min="0"
        value={quantity}
        onChange={() => {}}
      />

      <FormSelect
        name="color"
        label="Color"
        id="color"
        value={color}
        onChange={() => {}}
      >
        <option value="">--Select color--</option>
        <option value="Black">Black</option>
        <option value="Brown">Brown</option>
      </FormSelect>

      <FormSelect
        name="brand"
        label="Brand"
        id="brand"
        value={brand}
        onChange={() => {}}
      >
        <option value="">--Select brand--</option>
        <option value="Chanel">Chanel</option>
        <option value="Prada">Prada</option>
      </FormSelect>

      <FormSelect
        label="Shipping"
        name="shipping"
        id="shipping"
        value={shipping}
        onChange={() => {}}
      >
        <option value="">--Select shipping--</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </FormSelect>

      <FormSelect
        label="Categories"
        name="categoryId"
        id="category"
        value={categoryId}
        onChange={handleChooseCategory}
      >
        <option value="">--Select category--</option>
        {categories.map((category) => (
          <option value={category._id} key={category._id}>
            {category.name}
          </option>
        ))}
      </FormSelect>

      <FormMultiSelect
        name="subCategoriesId"
        id="sub-categories"
        defaultValue=""
        onChange={(data) => {
          const mappedData = data.map((piece) => piece.value);
          setProduct({ ...product, subCategoriesId: mappedData });
        }}
        options={subCategories?.map((subCategory) => {
          return {
            value: subCategory._id,
            label: subCategory.name,
          };
        })}
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
