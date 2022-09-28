import { API_URL } from '../env';

const signUp = (body: { email: string, password: string }) =>
  fetch(
    `${API_URL}/identity`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    },
  ).then(res => {
    if (res.status === 200) {
      return res
    }
    return Promise.reject(res)
  })

const signIn = (body: { email: string, password: string }) => {

  return fetch(
    `${API_URL}/identity`,
    {
      method: 'GET',
      headers: {
        Authorization: `Basic ${btoa(`${body.email}:${body.password}`)}`
      },
    },
  ).then(res => {
    if (res.status === 200) {
      return res;
    }

    return Promise.reject(res);
  });
}


export { signUp, signIn }
