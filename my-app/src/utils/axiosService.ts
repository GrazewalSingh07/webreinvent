
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { UserAuthData } from './interface';



const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// User authentication service
const authService = {
  login: async (userData: UserAuthData): Promise<AxiosResponse> => {
    return axiosInstance.post('login', userData);
  },
  register: async (userData: UserAuthData): Promise<AxiosResponse> => {
    return axiosInstance.post('register', userData);
  },
};

 

export { authService };
