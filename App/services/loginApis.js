import { api } from './api';

export const login = (params) => {
    return api.post('/account/login', params);
}

export const fetchUserInfo = () => {
    return api.get('/getAccountInfo');
}