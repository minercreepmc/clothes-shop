import axios from 'axios';

import { PRODUCTS_ENDPOINT } from './products.constant';

export async function httpGetProducts() {
  const res = await axios.get(PRODUCTS_ENDPOINT, {});
  return res.data;
}

export async function httpGetProduct({ slug }) {
  const res = await axios.get(`${PRODUCTS_ENDPOINT}/${slug}`, {});
  return res.data;
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
      { headers: { accessToken } },
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
