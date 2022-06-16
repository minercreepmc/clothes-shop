import axios from 'axios';

import { SUB_CATEGORY_ENDPOINT } from './sub-categories.constant';

export async function httpGetSubCategories() {
  const res = await axios.get(SUB_CATEGORY_ENDPOINT, {});
  return res.data;
}

export async function httpGetSubCategory({ slug }) {
  const res = await axios.get(`${SUB_CATEGORY_ENDPOINT}/${slug}`, {});
  return res.data;
}

export async function httpPostSubCategory({ subCategory, accessToken }) {
  try {
    const res = await axios.post(SUB_CATEGORY_ENDPOINT, subCategory, {
      headers: { accessToken },
    });
    return res.data;
  } catch (errors) {
    throw errors.response.data;
  }
}

export async function httpPutSubCategory({ subCategory, accessToken }) {
  try {
    const res = await axios.put(
      `${SUB_CATEGORY_ENDPOINT}/${subCategory.slug}`,
      subCategory,
      { headers: { accessToken } },
    );
    return res.data;
  } catch (errors) {
    throw errors.response.data;
  }
}

export async function httpDeleteSubCategory({ slug, accessToken }) {
  const res = await axios.delete(`${SUB_CATEGORY_ENDPOINT}/${slug}`, {
    headers: { accessToken },
  });
  return res.data;
}
