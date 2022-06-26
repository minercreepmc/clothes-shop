import { PRODUCTS_ACTION_TYPE } from './products.type';

import { createAction } from 'shares/utils/reducer/reducer.utils';

import {
  addItemToArray,
  removeItemFromArray,
  updateItemToArray,
} from 'shares/utils/logics/logics.utils';
import { httpGetProducts } from 'shares/hooks/requests/products/products.hook';
// products

export const addProductToProducts = (productToAdd, products) => {
  const productsToSet = addItemToArray(productToAdd, products);
  return createAction(PRODUCTS_ACTION_TYPE.SET_PRODUCTS, productsToSet);
};

export const removeProductFromProducts = (productToRemove, products) => {
  const productsToSet = removeItemFromArray(productToRemove, products);
  return createAction(PRODUCTS_ACTION_TYPE.SET_PRODUCTS, productsToSet);
};

export const updateProductToProducts = (productToUpdate, products) => {
  const productsToSet = updateItemToArray(productToUpdate, products);
  return createAction(PRODUCTS_ACTION_TYPE.SET_PRODUCTS, productsToSet);
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
