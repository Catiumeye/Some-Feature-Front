import axios from 'axios';

const getToken = () => {
    const data = localStorage.getItem('auth');

    return data ? 
        `Bearer ${JSON.parse(data).access_token}` :
        null;
}

export const setTokenHook = (authData) => {
    localStorage.removeItem('auth');
    localStorage.setItem('auth', JSON.stringify(authData));
}

export const AxiosClient = axios.create(
    {
        baseURL: process.env.REACT_APP_BACK_URL,
        transformRequest: [
            function (data, headers) {
                headers['Authorization'] = getToken();

                return data;
            },
            ...axios.defaults.transformRequest as any]
    })