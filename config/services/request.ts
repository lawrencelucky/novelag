import constants from '@config/constants';
import y2k from './y2k';
import logger from '@logger';
import helpers from '@/common/utils/helper';
import { AxiosRequestConfig } from 'axios';
import { parseCookies } from 'nookies';

const {
    API: {
        error: { aborted },
    },
    COOKIES,
} = constants;

const cookies = parseCookies();
const token = cookies[COOKIES.key];

const networkError = (errorCode: string): void => {
    if (errorCode === aborted.code) {
        helpers.openNotification({
            description: aborted.description,
            message: aborted.message,
            type: 'error',
        });
    }
};

const get = async <T>({ route, config }: { route: string; config?: AxiosRequestConfig }): Promise<T> => {
    const headers = { ...(token && { 'x-auth-token': encodeURIComponent(token) }) };
    const options: AxiosRequestConfig = {
        headers,
        ...config,
    };
    try {
        const response = await y2k.get(route, options);
        return response.data as T;
    } catch (error: any) {
        networkError(error?.code);
        logger({ error });
        return error?.response?.data;
    }
};

const post = async <T, X>({ route, payload }: { route: string; token?: string; payload: X }): Promise<T> => {
    try {
        const response = await y2k.post(route, payload);
        return response.data as T;
    } catch (error: any) {
        networkError(error?.code);
        logger({ error });
        return error?.response?.data;
    }
};

const put = async <T, X>({ route, payload }: { route: string; token?: string; payload?: X }): Promise<T> => {
    try {
        const response = await y2k.put(route, payload);
        return response.data as T;
    } catch (error: any) {
        networkError(error?.code);
        logger({ error });
        return error?.response?.data;
    }
};

const postFormData = async <T, X>({ route, payload }: { route: string; payload: X }): Promise<T> => {
    const headers = {
        'Content-Type': 'multipart/form-data',
    };
    try {
        const response = await y2k.put(route, payload, { headers });
        return response.data as T;
    } catch (error: any) {
        networkError(error?.code);
        logger({ error });
        return error?.response?.data;
    }
};

const destroy = async <T>({ route }: { route: string; token?: string }): Promise<T> => {
    try {
        const response = await y2k.delete(route);
        return response.data as T;
    } catch (error: any) {
        networkError(error?.code);
        logger({ error });
        return error?.response?.data;
    }
};

const requests = {
    destroy,
    get,
    networkError,
    post,
    postFormData,
    put,
};

export default requests;
