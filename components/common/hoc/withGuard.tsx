import React from 'react';
import { useRouter } from 'next/router';
import config from '@config/constants';
import { parseCookies } from 'nookies';

const { CLIENT_ROUTES, COOKIES } = config;

const withGuard = (WrapperComponent) => () => {
    if (typeof window !== 'undefined') {
        const router = useRouter();
        const cookies = parseCookies();
        const token = cookies[COOKIES.key];

        if (!token) {
            router.replace(CLIENT_ROUTES.home);
            return null;
        }

        return <WrapperComponent />;
    }
    return null;
};

export default withGuard;
