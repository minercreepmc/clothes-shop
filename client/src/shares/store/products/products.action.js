import { PRODUCTS_ACTION_TYPE } from './products.type';

import { createAction } from 'shares/utils/reducer/reducer.utils';

import {
  addItemToArray,
  removeItemFromArray,
  updateItemToArray,
} from 'shares/utils/logics/logics.utils';
import {
  httpDeleteProduct,
  httpGetProducts,
  httpPostProduct,
  httpPutProduct,
} from 'shares/hooks/requests/products/products.hook';
import {
  httpDeleteImages,
  httpUploadImages,
} from 'shares/hooks/requests/images/images.hook';
// products

// add
const addProductToProductsStart = () =>
  createAction(PRODUCTS_ACTION_TYPE.ADD_PRODUCT_START);

const addProductToProductsSuccess = (productToAdd, products) => {
  const productsToSet = addItemToArray(productToAdd, products);
  return createAction(PRODUCTS_ACTION_TYPE.ADD_PRODUCT_SUCCESS, productsToSet);
};
const addProductToProductsFailed = (errors) =>
  createAction(PRODUCTS_ACTION_TYPE.ADD_PRODUCT_FAILED, errors);

export const addProductToProductsAsync =
  ({ productToAdd, products, images, accessToken }) =>
    async (dispatch) => {
      dispatch(addProductToProductsStart());

      try {
        const imagesLocation = await httpUploadImages({ images, accessToken });
        //TODO: fix this shit
        productToAdd.images = imagesLocation;

        const newProduct = await httpPostProduct({
          product: productToAdd,
          accessToken,
        });
        dispatch(addProductToProductsSuccess(newProduct, products));
      } catch (errors) {
        dispatch(addProductToProductsFailed(errors));
      }
    };

// Delete
const deleteProductFromProductsStart = () =>
  createAction(PRODUCTS_ACTION_TYPE.DELETE_PRODUCT_START);
const deleteProductFromProductsSuccess = (productToDelete, products) => {
  const productsToSet = removeItemFromArray(productToDelete, products);
  return createAction(
    PRODUCTS_ACTION_TYPE.DELETE_PRODUCT_SUCCESS,
    productsToSet,
  );
};
const deleteProductFromProductsFailed = (errors) =>
  createAction(PRODUCTS_ACTION_TYPE.DELETE_PRODUCT_FAILED, errors);

export const deleteProductFromProductsAsync =
  (slug, products, accessToken) => async (dispatch) => {
    dispatch(deleteProductFromProductsStart());

    try {
      const deletedProduct = await httpDeleteProduct({
        slug,
        accessToken,
      });

      const { images } = deletedProduct;
      const imagesId = images.map((image) => image.public_id);
      await httpDeleteImages({ imagesId, accessToken });
      dispatch(deleteProductFromProductsSuccess(deletedProduct, products));
    } catch (errors) {
      dispatch(deleteProductFromProductsFailed(errors));
    }
  };

// update
const updateProductToProductsStart = () =>
  createAction(PRODUCTS_ACTION_TYPE.UPDATE_PRODUCT_START);
const updateProductToProductsSuccess = (updatedProduct, products) => {
  const productsToSet = updateItemToArray(updatedProduct, products);

  return createAction(
    PRODUCTS_ACTION_TYPE.UPDATE_PRODUCT_SUCCESS,
    productsToSet,
  );
};
const updateProductToProductsFailed = (errors) =>
  createAction(PRODUCTS_ACTION_TYPE.UPDATE_PRODUCT_FAILED, errors);

export const updateProductToProductsAsync =
  ({ productToUpdate, products, accessToken }) =>
    async (dispatch) => {
      dispatch(updateProductToProductsStart());

      try {
        const updatedProduct = await httpPutProduct({
          product: productToUpdate,
          accessToken,
        });
        dispatch(updateProductToProductsSuccess(updatedProduct, products));
      } catch (errors) {
        dispatch(updateProductToProductsFailed(errors));
      }
    };

export const setProducts = (productsToSet) =>
  createAction(PRODUCTS_ACTION_TYPE.SET_PRODUCTS, productsToSet);

const fetchProductsStart = () =>
  createAction(PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_START);
const fetchProductsSuccess = (products) =>
  createAction(PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_SUCCESS, products);
const fetchProductsErrors = (errors) =>
  createAction(PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_FAILED, errors);

export const fetchProductsAsync = () => async (dispatch) => {
  dispatch(fetchProductsStart());

  try {
    const products = await httpGetProducts();
    dispatch(fetchProductsSuccess(products));
  } catch (errors) {
    dispatch(fetchProductsErrors(errors));
  }
};
