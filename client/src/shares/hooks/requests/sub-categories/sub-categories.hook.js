import axios from 'axios';

import {
  SUB_CATEGORIES_GET_URL,
  SUB_CATEGORY_POST_URL,
  SUB_CATEGORY_PUT_URL,
  SUB_CATEGORY_DELETE_URL,
} from './sub-categories.constant';

export async function httpGetSubCategories() {
  const res = await axios.get(SUB_CATEGORIES_GET_URL, {});
  return res.data;
}

export async function httpGetSubCategory({ slug }) {
  const res = await axios.get(`${SUB_CATEGORIES_GET_URL}/${slug}`, {});
  return res.data;
}

export async function httpPostSubCategory({ subCategory, accessToken }) {
  try {
    const res = await axios.post(SUB_CATEGORY_POST_URL, subCategory, {
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
      `${SUB_CATEGORY_PUT_URL}/${subCategory.slug}`,
      subCategory,
      { headers: { accessToken } },
    );
    return res.data;
  } catch (errors) {
    throw errors.response.data;
  }
}

export async function httpDeleteSubCategory({ slug, accessToken }) {
  const res = await axios.delete(`${SUB_CATEGORY_DELETE_URL}/${slug}`, {
    headers: { accessToken },
  });
  return res.data;
}
