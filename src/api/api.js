import axios from 'axios';

export const baseURL = 'https://photobook.fly.dev';

export const api = axios.create({
  baseURL,
  headers: {
    authorization: `Bearer ${localStorage.getItem(
      'accessToken'
    )} ${localStorage.getItem('refreshToken')}`,
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && localStorage.getItem('accessToken')) {
      console.log('Using interceptor');

      await refreshSession(originalRequest);

      return api.request(originalRequest);
    }

    throw error;
  }
);

async function refreshSession(originalRequest) {
  try {
    const response = await axios.get(`${baseURL}/auth/session`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          'accessToken'
        )} ${localStorage.getItem('refreshToken')}`,
      },
    });

    console.log(`Success refresh session: ${response.status === 200}`);

    const { accessToken, refreshToken } = response.data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    originalRequest.headers.authorization = `Bearer ${response.data.accessToken} ${response.data.refreshToken}`;
  } catch (error) {
    console.log('Failed to refresh session');
    throw error;
  }
}
