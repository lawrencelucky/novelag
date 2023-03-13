import axios from 'axios';
import logger from '@logger';
import nookies, { parseCookies } from 'nookies';
import constants from '@config/constants';
import helpers from '@/components/common/utils/helper';

const {
    API: { baseURL, error: err, timeout },
    COOKIES,
    CLIENT_ROUTES,
} = constants;

const y2k = axios.create({
    baseURL,
    timeout,
});

y2k.interceptors.request.use(
    (config) => {
        const x = config;
        const cookies = parseCookies();
        const token = cookies[COOKIES.key];

        if (x.headers && token) {
            x.headers['x-auth-token'] = encodeURIComponent(token);
        }
        if (token && helpers.isTokenExpired(token)) {
            nookies.destroy(null, COOKIES.key, { path: CLIENT_ROUTES.home });
            window.location.pathname = CLIENT_ROUTES.login;
        }
        return x;
    },
    (error) => {
        logger({ error });
        return Promise.reject(error);
    },
);

y2k.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (
            error?.response?.status === 401 &&
            (error?.response?.data?.message?.toLocaleLowerCase() === err?.expiredToken?.toLocaleLowerCase() ||
                error?.response?.data?.message?.toLocaleLowerCase() ===
                    'Access denied. No token provided.'.toLocaleLowerCase())
        ) {
            nookies.destroy(null, COOKIES.key, { path: CLIENT_ROUTES.home });
            window.location.pathname = CLIENT_ROUTES.login;
        }
        return Promise.reject(error);
    },
);

export default y2k;
