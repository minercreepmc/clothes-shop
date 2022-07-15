import axios from 'axios';

import { PRODUCTS_ENDPOINT } from './products.constant';

export async function httpGetProducts({
  limit = 10,
  category = false,
  subCategories = false,
  categoryId = '',
  subCategoryId = '',
}) {
  try {
    const res = await axios.get(PRODUCTS_ENDPOINT, {
      params: {
        limit,
        category,
        subCategories,
        categoryId,
        subCategoryId,
      },
    });
    return res.data;
  } catch (errors) {
    return errors.response.data;
  }
}

export async function httpGetProductsForAdmin({ descriptionTruncate }) {
  const DEFAULT_LIMIT = 10;
  try {
    const res = await axios.get(
      `${PRODUCTS_ENDPOINT}/?limit=${DEFAULT_LIMIT}&descriptionTruncate=${descriptionTruncate}`,
      {}
    );
    return res.data;
  } catch (errors) {
    return errors.response.data;
  }
}

export async function httpGetProduct({ slug }) {
  try {
    const res = await axios.get(`${PRODUCTS_ENDPOINT}/${slug}`, {});
    return res.data;
  } catch (errors) {
    throw errors.response.data;
  }
}

export async function httpPostProduct({ product, accessToken }) {
  try {
    const res = await axios.post(PRODUCTS_ENDPOINT, product, {
      headers: { accessToken },
    });
    return res.data;
  } catch (errors) {
    throw errors.response.data;
  }
}

export async function httpPutProduct({ product, accessToken }) {
  try {
    const res = await axios.put(
      `${PRODUCTS_ENDPOINT}/${product.slug}`,
      product,
      { headers: { accessToken } }
    );
    return res.data;
  } catch (errors) {
    throw errors.response.data;
  }
}

export async function httpDeleteProduct({ slug, accessToken }) {
  const res = await axios.delete(`${PRODUCTS_ENDPOINT}/${slug}`, {
    headers: { accessToken },
  });
  return res.data;
}
