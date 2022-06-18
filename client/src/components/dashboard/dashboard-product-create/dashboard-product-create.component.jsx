import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Spinner, Stack } from 'react-bootstrap';
import { toast } from 'react-toastify';

import FormSelect from 'components/form-group/form-select/form-select.component';
import FormGroup from 'components/form-group/form-input/form-input.component';
import FormMultiSelect from 'components/form-group/form-multiselect/form-multiselect.component';
import FormFile from 'components/form-group/form-file/form-file.component';

import {
  selectCategories,
  selectProducts,
} from 'shares/store/shop/shop.selector';
import { httpPostProduct } from 'shares/hooks/requests/products/products.hook';
import { selectCurrentUser } from 'shares/store/user/user.selector';
import {
  addProductToProducts,
  setProducts,
} from 'shares/store/shop/shop.action';
import { httpGetCategory } from 'shares/hooks/requests/categories/category-requests.hook';
import PrimaryButton from 'components/button/primary-button/primary-button.component';
import { httpUploadImages } from 'shares/hooks/requests/images/images.hook';
import SpinnerContainer from 'components/spinner/spinner.component';

const INITIAL_STATE = {
  title: '',
  description: '',
  price: 0,
  color: '',
  brand: '',
  shipping: '',
  quantity: '',
  categoryId: '',
  subCategoriesId: [],
  images: [],
};

const DashboardProductCreate = () => {
  const [product, setProduct] = useState(INITIAL_STATE);
  const [isCreating, setIsCreating] = useState(false);
  const [subCategories, setSubCategories] = useState([]);

  const {
    title,
    description,
    price,
    quantity,
    color,
    brand,
    shipping,
    categoryId,
    subCategoriesId,
    images,
  } = product;

  const admin = useSelector(selectCurrentUser);
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const input = e.target;

    setProduct({ ...product, [input.name]: input.value });
  };

  const handleChooseCategory = async (e) => {
    const input = e.target;

    const category = await httpGetCategory({
      _id: input.value,
      subCategories: true,
    });
    setProduct({ ...product, categoryId: input.value });
    setSubCategories(category.subcategories);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    console.log(product);
    if (
      !title ||
      !description ||
      !price ||
      !quantity ||
      !color ||
      !brand ||
      !shipping ||
      !categoryId ||
      subCategoriesId.length === 0 ||
      images.length === 0
    ) {
      toast.error('Please fill all the required fields');
      return;
    }

    try {
      setIsCreating(true);

      const imagesLocation = await httpUploadImages({
        images: product.images,
        accessToken: admin.accessToken,
      });

      product.images = imagesLocation;

      const newProduct = await httpPostProduct({
        product,
        accessToken: admin.accessToken,
      });
      dispatch(addProductToProducts(newProduct, products));
      setProduct(INITIAL_STATE);
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

  return (
    <div>
      <h1 className="fw-bold">Create product</h1>
      <Form
        className="mb-5"
        onChange={handleChange}
        onSubmit={handleCreateProduct}
      >
        <FormGroup
          name="title"
          type="text"
          label="Title"
          id="title"
          value={title}
          onChange={() => {}}
        />

        <FormGroup
          name="description"
          type="text"
          label="Description"
          id="description"
          value={description}
          as="textarea"
          onChange={() => {}}
        />

        <FormGroup
          name="price"
          type="number"
          id="price"
          label="Price"
          value={price}
          onChange={() => {}}
          min="0"
        />

        <FormFile product={product} setProduct={setProduct} />
        <FormGroup
          name="quantity"
          type="number"
          id="quantity"
          label="Quantity"
          value={quantity}
          onChange={() => {}}
          min="0"
        />

        <FormSelect
          label="Color"
          name="color"
          id="color"
          value={color}
          onChange={() => {}}
        >
          <option value="">Select color</option>
          <option value="Black">Black</option>
          <option value="Brown">Brown</option>
        </FormSelect>

        <FormSelect
          label="Brand"
          name="brand"
          id="brand"
          value={brand}
          onChange={() => {}}
        >
          <option value="">Select brand</option>
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
          <option value="">Select shipping</option>
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
          <option value="">Select category</option>
          {categories.map((category, index) => (
            <option key={index} value={category._id}>
              {category.name}
            </option>
          ))}
        </FormSelect>

        <FormMultiSelect
          name="subCategoriesId"
          id="sub-categories"
          onChange={(options) =>
            setProduct({ ...product, subCategoriesId: options })
          }
          value={subCategoriesId}
          options={subCategories.map((subCategory) => ({
            value: subCategory._id,
            label: subCategory.name,
          }))}
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
    </div>
  );
};

export default DashboardProductCreate;
