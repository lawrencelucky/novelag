import React from 'react';
import { Typography } from 'antd';
import icons from '@/icons';
import CardsDesktop from './CardsDesktop';
import CardsMobile from './CardsMobile';

const Cards = () => {
    return (
        <>
            <div className="hidden lg:block">
                <CardsDesktop />
            </div>

            <div className="lg:hidden">
                <CardsMobile />
            </div>
        </>
    );
};

export default Cards;
