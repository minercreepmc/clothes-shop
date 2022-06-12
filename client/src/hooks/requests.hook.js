import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const USER_CREATE_ENDPOINT = `${API_URL}/users/create`;
const USER_UPSERT_ENDPOINT = `${API_URL}/users/upsert`;
const CURRENT_USER_URL = `${API_URL}/users/current-user`;
const CURRENT_ADMIN_URL = `${API_URL}/users/current-admin`;

async function httpPostUser(accessToken) {
  const res = await axios.post(
    USER_CREATE_ENDPOINT,
    {},
    { headers: { accessToken } },
  );
  return res.data;
}

async function httpUpsertUser(accessToken) {
  const res = await axios.post(
    USER_UPSERT_ENDPOINT,
    {},
    { headers: { accessToken } },
  );

  return res.data;
}

async function httpGetCurrentUser(accessToken) {
  const res = await axios.post(
    CURRENT_USER_URL,
    {},
    { headers: { accessToken } },
  );
  return res.data;
}

async function httpCurrentAdmin(accessToken) {
  const res = await axios.post(
    CURRENT_ADMIN_URL,
    {},
    { headers: { accessToken } },
  );
  return res.data;
}

export { httpPostUser, httpUpsertUser, httpGetCurrentUser, httpCurrentAdmin };
