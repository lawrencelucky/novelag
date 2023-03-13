import React from 'react';
import 'styles/output.scss';
import 'styles/globals.css';
import '../styles/nprogress.css';
import '../styles/override.scss';
import Router from 'next/router';
import NProgress from 'nprogress';
import type { AppProps } from 'next/app';
import { GlobalProvider } from '@/config/context/Provider';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
    return (
        <GlobalProvider>
            <Component {...pageProps} />
        </GlobalProvider>
    );
}
