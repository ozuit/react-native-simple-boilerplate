const env = {
    test: 'test', product: 'product', local: 'local',
};
const API_URL = {
    local: 'http://localhost/api/v1',
    test: 'https://195914e2.ngrok.io/api/v1',
    product: 'https://yourdomain/api/v1',
};
const currentEnv = env.local;

export const BASE_API_URL = API_URL[currentEnv];
export const USER_TOKEN = 'USER_TOKEN';
