import PrimaryButton from 'components/reusables/button/primary-button/primary-button.component';
import FormInput from 'components/reusables/form-group/form-input/form-input.component';
import FormSelect from 'components/reusables/form-group/form-select/form-select.component';
import SpinnerContainer from 'components/reusables/spinner/spinner.component';
import ProductCategoriesFormGroup from 'components/smarts/form-group/product-categories-form-grpup/product-categories-form-group.component';
import ProductSubCategoriesFormGroup from 'components/smarts/form-group/product-sub-categories-form-group/product-sub-categories-form-group.component';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { httpGetCategory } from 'shares/hooks/requests/categories/category-requests.hook';
import { httpGetProduct } from 'shares/hooks/requests/products/products.hook';
import { httpGetSubCategory } from 'shares/hooks/requests/sub-categories/sub-categories.hook';
import { selectCategories } from 'shares/store/categories/categories.selector';
import { updateProductToProductsAsync } from 'shares/store/products/products.action';
import {
  selectIsProductUpdating,
  selectProducts,
} from 'shares/store/products/products.selector';
import { selectCurrentUser } from 'shares/store/user/user.selector';
const INITIAL_PRODUCT_STATE = {
  title: '',
  description: '',
  price: 0,
  images: [],
  quantity: 0,
  color: '',
  shipping: '',
  brand: '',
  categoryId: '',
  discount: '',
  subCategoriesId: [],
};

const ProductUpdateForm = () => {
  const [product, setProduct] = useState(INITIAL_PRODUCT_STATE);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [haveProduct, setHaveProduct] = useState(false);

  const isUpdating = useSelector(selectIsProductUpdating);

  const {
    title,
    description,
    price,
    discount,
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

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    if (
      !title ||
      !description ||
      !price ||
      !quantity ||
      !color ||
      !shipping ||
      !categoryId ||
      !brand ||
      // images.length === 0 ||
      subCategoriesId.length === 0
    ) {
      toast.error('Please fill all required fields');
      return;
    }
    try {
      dispatch(
        updateProductToProductsAsync({
          productToUpdate: product,
          products,
          accessToken: admin.accessToken,
        }),
      );
      toast.success('Update successfully');
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

  // const handleResizeImage = async (e) => {
  //   const resizedImages = await resizeImages(Array.from(e.target.files));
  //   setProduct({ ...product, images: resizedImages });
  // };

  const handleChooseCategory = async (e) => {
    setProduct({ ...product, subCategoriesId: '' });

    const category = await httpGetCategory({
      param: e.target.value,
      subCategories: true,
    });
    setProduct({ ...product, categoryId: e.target.value });
    setSubCategories(category.subcategories);
  };

  const { slug } = useParams();

  useEffect(() => {
    const getCurrentProduct = async () => {
      const product = await httpGetProduct({ slug });

      if (!product) return;

      setHaveProduct(true);
      setProduct(product);
    };

    getCurrentProduct();
  }, [slug]);

  useEffect(() => {
    const loadSubCategories = async () => {
      const category = await httpGetCategory({
        param: categoryId,
        subCategories: true,
      });

      setSubCategories(category.subcategories);
    };

    loadSubCategories();
  }, [categoryId]);

  useEffect(() => {
    const loadSelectedSubCategories = async () => {
      const initialSubCategoriesId = subCategoriesId;
      const subCategoriesIdList = subCategories?.map(
        (subCategory) => subCategory._id,
      );

      const selectedSubCategories = initialSubCategoriesId?.filter((id) =>
        subCategoriesIdList?.includes(id),
      );

      const getSubCategoriesMultiSelect = selectedSubCategories?.map((id) => {
        return httpGetSubCategory({ param: id });
      });
      const response = await Promise.all(getSubCategoriesMultiSelect);
      setSelectedSubCategories(response);
    };

    loadSelectedSubCategories();
  }, [subCategoriesId, subCategories]);

  return haveProduct ? (
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
        onChange={() => { }}
      />

      <FormInput
        name="description"
        type="text"
        label="Description"
        id="description"
        as="textarea"
        value={description}
        onChange={() => { }}
      />

      <FormInput
        name="price"
        type="number"
        id="price"
        label="Price"
        min="0"
        step="0.01"
        value={price}
        onChange={() => { }}
      />

      <FormInput
        name="discount"
        type="number"
        id="discount"
        label="Discount"
        min="0"
        max="100"
        step="1"
        value={discount}
        onChange={() => { }}
      />

      <FormInput
        name="quantity"
        type="number"
        id="quantity"
        label="Quantity"
        min="0"
        value={quantity}
        onChange={() => { }}
      />

      <FormSelect
        name="color"
        label="Color"
        id="color"
        value={color}
        onChange={() => { }}
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
        onChange={() => { }}
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
        onChange={() => { }}
      >
        <option value="">--Select shipping--</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </FormSelect>

      <ProductCategoriesFormGroup
        product={product}
        setProduct={setProduct}
        setSubCategories={setSubCategories}
        handleChange={handleChooseCategory}
        value={categoryId}
        options={categories}
      />

      <ProductSubCategoriesFormGroup
        product={product}
        setProduct={setProduct}
        value={selectedSubCategories}
        options={subCategories}
      />

      <PrimaryButton
        variant="outline-secondary"
        type="submit"
        disabled={isUpdating}
      >
        {!isUpdating ? 'Update' : 'Updating...'}
      </PrimaryButton>

      <SpinnerContainer className="ms-2" isProcess={isUpdating} />
    </Form>
  ) : (
    <span>Product did not exist :(</span>
  );
};

export default ProductUpdateForm;
