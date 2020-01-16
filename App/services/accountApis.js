import { api } from './api';

export const changePass = (params) => {
    return api.put('/account/change-pass', params);
}

export const all = (params) => {
    return api.get('/account', params);
}

export const update = (id, params) => {
    return api.put('/account/' + id, params);
}

export const create = (params) => {
    return api.post('/account', params);
}