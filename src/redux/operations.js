import axios from 'axios';

export const backendAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const contactAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getContacts = async () => {
  const { data } = await backendAPI.get('/contacts');
  return data;
};

export const addContacts = async contact => {
  const { data } = await backendAPI.post('contacts', contact);
  return data;
};

export const delContacts = async id => {
  const { data } = await backendAPI.delete(`/contacts/${id}`);
  return data;
};

export const updContacts = async id => {
  const { data } = await backendAPI.patch(`/contacts/${id}`);
  return data;
};

export const token = {
  set: token => {
    backendAPI.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unSet: token => {
    backendAPI.defaults.headers.Authorization = '';
  },
};

export const signUpUser = async credentials => {
  const { data } = await backendAPI.post('users/signup', credentials);
  return data;
};

export const loginUser = async credentials => {
  const { data } = await backendAPI.post('users/login', credentials);
  console.log(data);
  return data;
};

export const logoutUser = async () => {
  return backendAPI.post('users/logout');
};

export const currentUser = async () => {
  const data = await backendAPI.get('users/current');
  return data;
};
