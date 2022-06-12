import axios from 'axios';

import {
  USER_CREATE_ENDPOINT,
  USER_UPSERT_ENDPOINT,
  CURRENT_USER_URL,
  CURRENT_ADMIN_URL,
} from './user-requests.constant';

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
