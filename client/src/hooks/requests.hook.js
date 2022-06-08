import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const USER_CREATE_ENDPOINT = `${API_URL}/users/create`;
const USER_UPSERT_ENDPOINT = `${API_URL}/users/upsert`;
const CURRENT_USER_URL = `${API_URL}/users/current-user`;

async function httpPostUser(user) {
  const res = await axios.post(
    USER_CREATE_ENDPOINT,
    { ...user },
    { headers: { accessToken: user.accessToken } },
  );
  return res.data;
}

async function httpUpsertUser(user) {
  const res = await axios.post(
    USER_UPSERT_ENDPOINT,
    { ...user },
    { headers: { accessToken: user.accessToken } },
  );

  return res.data;
}

async function httpGetCurrentUser(userMetadata) {
  const res = await axios.post(
    CURRENT_USER_URL,
    { ...userMetadata },
    { headers: { accessToken: userMetadata.accessToken } },
  );
  return res.data;
}

export { httpPostUser, httpUpsertUser, httpGetCurrentUser };
