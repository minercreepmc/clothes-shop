import axios from 'axios';

import {
  CATEGORIES_GET_URL,
  CATEGORY_POST_URL,
  CATEGORY_PUT_URL,
  CATEGORY_DELETE_URL,
} from './category-requests.constant';

export async function httpGetCategories() {
  const res = await axios.get(CATEGORIES_GET_URL, {});
  return res.data;
}

export async function httpPostCategory({ category, accessToken }) {
  try {
    const res = await axios.post(CATEGORY_POST_URL, category, {
      headers: { accessToken },
    });
    return res.data;
  } catch (errors) {
    throw errors.response.data;
  }
}

export async function httpDeleteCategory({ slug, accessToken }) {
  const res = await axios.delete(`${CATEGORY_DELETE_URL}/${slug}`, {
    headers: { accessToken },
  });
  return res.data;
}
