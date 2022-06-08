import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const USER_CREATE_ENDPOINT = `${API_URL}/users/create`;
const USER_UPSERT_ENDPOINT = `${API_URL}/users/upsert`;

async function httpPostUser(user) {
  return await axios.post(
    USER_CREATE_ENDPOINT,
    { ...user },
    { headers: { accessToken: user.accessToken } },
  );
}

async function httpUpsertUser(user) {
  return await axios.post(
    USER_UPSERT_ENDPOINT,
    { ...user },
    { headers: { accessToken: user.accessToken } },
  );
}

export { httpPostUser, httpUpsertUser };
