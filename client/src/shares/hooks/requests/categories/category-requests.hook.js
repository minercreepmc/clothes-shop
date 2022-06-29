import axios from 'axios';

import { CATEGORIES_ENDPOINT } from './category-requests.constant';

export async function httpGetCategories() {
  const res = await axios.get(CATEGORIES_ENDPOINT, {});
  return res.data;
}

export async function httpGetCategory({ param, subCategories = '' }) {
  const res = await axios.get(
    `${CATEGORIES_ENDPOINT}/${param}?subCategories=${subCategories}`,
    {},
  );
  return res.data;
}

export async function httpPostCategory({ category, accessToken }) {
  try {
    const res = await axios.post(CATEGORIES_ENDPOINT, category, {
      headers: { accessToken },
    });
    return res.data;
  } catch (errors) {
    throw errors.response.data;
  }
}

export async function httpPutCategory({ category, accessToken }) {
  try {
    const res = await axios.put(
      `${CATEGORIES_ENDPOINT}/${category.slug}`,
      category,
      { headers: { accessToken } },
    );
    return res.data;
  } catch (errors) {
    throw errors.response.data;
  }
}

export async function httpDeleteCategory({ slug, accessToken }) {
  const res = await axios.delete(`${CATEGORIES_ENDPOINT}/${slug}`, {
    headers: { accessToken },
  });
  return res.data;
}
