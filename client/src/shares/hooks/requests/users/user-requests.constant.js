import { API_URL } from 'shares/constants';

const USER_CREATE_ENDPOINT = `${API_URL}/users/create`;
const USER_UPSERT_ENDPOINT = `${API_URL}/users/upsert`;
const CURRENT_USER_URL = `${API_URL}/users/current-user`;
const CURRENT_ADMIN_URL = `${API_URL}/users/current-admin`;

export {
  API_URL,
  USER_CREATE_ENDPOINT,
  USER_UPSERT_ENDPOINT,
  CURRENT_USER_URL,
  CURRENT_ADMIN_URL,
};
