const ENVIRONMENT = {
    development: process.env.NEXT_PUBLIC_ENVIRONMENT === 'development',
    production: process.env.NEXT_PUBLIC_ENVIRONMENT === 'production',
};

const API = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
    error: {
        aborted: {
            code: 'ECONNABORTED',
            description: 'Please check your network connection and try again',
            message: 'Network Error!',
        },
        expiredToken: 'Access denied. Token Expired',
    },
    timeout: 6000,
};

const CLIENT_ROUTES = {
    home: '/',
    login: '/auth/login',
};

const COOKIES = {
    key: 'y2k-user',
    maxAge: 21600, // 6 hours
    path: CLIENT_ROUTES.home,
};

const constants = {
    API,
    CLIENT_ROUTES,
    COOKIES,
    ENVIRONMENT,
};

export default constants;
