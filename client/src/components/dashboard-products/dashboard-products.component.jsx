import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import FormSelect from 'components/form-select/form-select.component';
import FormGroup from 'components/form-group/form-group.component';

import {
  selectCategories,
  selectProducts,
} from 'shares/store/shop/shop.selector';
import { httpPostProduct } from 'shares/hooks/requests/products/products.hook';
import { selectCurrentUser } from 'shares/store/user/user.selector';
import { addProductToProducts } from 'shares/store/shop/shop.action';

const INITIAL_STATE = {
  title: '',
  description: '',
  price: 0,
  color: '',
  brand: '',
  shipping: '',
  quantity: '',
  // categoryId: '',
  // subCategoriesId: [],
};

const DashboardProducts = () => {
  const [product, setProduct] = useState(INITIAL_STATE);
  const [isCreating, setIsCreating] = useState(false);

  const { title, description, price, quantity, color, brand, shipping } =
    product;

  const admin = useSelector(selectCurrentUser);
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const input = e.target;

    setProduct({ ...product, [input.name]: input.value });
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !price ||
      !quantity ||
      !color ||
      !brand ||
      !shipping
    ) {
      toast.error('Please fill all the required fields');
      return;
    }

    try {
      setIsCreating(true);
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
          onChange={() => { }}
        />

        <FormGroup
          name="description"
          type="text"
          label="Description"
          id="description"
          value={description}
          as="textarea"
          onChange={() => { }}
        />

        <FormGroup
          name="price"
          type="number"
          id="price"
          label="Price"
          value={price}
          onChange={() => { }}
        />

        <FormGroup
          name="quantity"
          type="number"
          id="quantity"
          label="Quantity"
          value={quantity}
          onChange={() => { }}
        />

        <FormSelect
          label="Color"
          name="color"
          id="color"
          value={color}
          onChange={() => { }}
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
          onChange={() => { }}
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
          onChange={() => { }}
        >
          <option value="">Select shipping</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </FormSelect>

        <Button variant="dark" type="submit" disabled={isCreating}>
          {!isCreating ? 'Create' : 'Creating...'}
        </Button>
      </Form>
    </div>
  );
};

// <FormSelect
//   label="Categories"
//   name="categoryId"
//   id="category"
//   value={categoryId}
// >
//   {categories.map((category) => (
//     <option value={category.value}>{category.name}</option>
//   ))}
//        </FormSelect>

export default DashboardProducts;
