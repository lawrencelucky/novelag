import { notification } from 'antd';
import { INotification } from '../types/interfaces';
import jwtDecode, { JwtPayload } from 'jwt-decode';

interface IProps {
    number: any;
    isCurrency?: boolean;
    currency?: 'NGN' | 'USD';
    notation?: 'compact' | 'standard';
}

const query = `*[_type == "post"] | order(_createdAt desc) [0...100]{
   _id,
   title,
   author-> {
    name,
    image
   },
   description,
   publishedAt,
   _createdAt,
   mainImage,
   slug,
   body
 }`;

const openNotification = ({ type, message, description }: INotification): void => {
    notification[type]({
        className: 'y2k-notification',
        description,
        duration: 5,
        message,
    });
};
const isTokenExpired = (token: string): boolean => {
    const decodedToken: JwtPayload = jwtDecode(token);
    return !decodedToken.exp || decodedToken.exp * 1000 < Date.now();
};
const handleCopy = (value: string): void => {
    if (typeof navigator !== 'undefined') {
        navigator.clipboard.writeText(value);
        openNotification({ message: 'Copied to Clipboard', type: 'info' });
    }
};
const formatNumber = ({ number, isCurrency = false, currency = 'USD', notation = 'standard' }: IProps): string => {
    const locale = 'en-Gb';
    const numberToFormat = number;
    return isCurrency
        ? new Intl.NumberFormat(locale, {
              currency,
              currencySign: 'accounting',
              notation,
              style: 'currency',
          }).format(numberToFormat)
        : new Intl.NumberFormat(locale, { notation }).format(numberToFormat);
};

const thousandSeparator = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const helpers = {
    formatNumber,
    handleCopy,
    isTokenExpired,
    openNotification,
    query,
    thousandSeparator,
};

export default helpers;
