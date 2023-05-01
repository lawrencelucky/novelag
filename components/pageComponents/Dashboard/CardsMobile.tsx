import React from 'react';
import { Typography } from 'antd';
import icons from '@/icons';

const CardsMobile = () => {
    return (
        <div className="overflow-auto whitespace-nowrap space-x-6 no-scrollbar">
            <div className="inline-block w-[280px] shadow-30 rounded-lg bg-white">
                <div className="flex items-center justify-between border-b px-6 py-3 border-[#F5F5F4]">
                    <Typography.Text className="text-[#A0A0AB] text-sm">Balance</Typography.Text>
                    <span>{icons.shareIcon()}</span>
                </div>
                <div className="px-6 py-6 space-y-2">
                    <Typography.Text className="text-lg">₦0</Typography.Text>
                    <div className="flex items-center justify-between">
                        <Typography.Text>Recurring Revenue</Typography.Text>
                        <span>{icons.progressIcon()}</span>
                    </div>
                </div>
            </div>
            <div className="inline-block w-[280px] shadow-30 rounded-lg bg-white">
                <div className="flex items-center justify-between border-b px-6 py-3 border-[#F5F5F4]">
                    <Typography.Text className="text-[#A0A0AB] text-sm">No of farms</Typography.Text>
                    <span>{icons.shareIcon()}</span>
                </div>
                <div className="px-6 py-6 space-y-2">
                    <Typography.Text className="text-lg">4</Typography.Text>
                    <div className="flex items-center justify-between">
                        <Typography.Text>In total</Typography.Text>
                        <span>{icons.progressIcon()}</span>
                    </div>
                </div>
            </div>
            <div className="inline-block w-[280px] shadow-30 rounded-lg bg-white">
                <div className="flex items-center justify-between border-b px-6 py-3 border-[#F5F5F4]">
                    <Typography.Text className="text-[#A0A0AB] text-sm">No of Crops</Typography.Text>
                    <span>{icons.shareIcon()}</span>
                </div>
                <div className="px-6 py-6 space-y-2">
                    <Typography.Text className="text-lg">500</Typography.Text>
                    <div className="flex items-center justify-between">
                        <Typography.Text>In total</Typography.Text>
                        <span>{icons.progressIcon()}</span>
                    </div>
                </div>
            </div>
            <div className="inline-block w-[280px] shadow-30 rounded-lg bg-white">
                <div className="flex items-center justify-between border-b px-6 py-3 border-[#F5F5F4]">
                    <Typography.Text className="text-[#A0A0AB] text-sm">Stock Quantity</Typography.Text>
                    <span>{icons.shareIcon()}</span>
                </div>
                <div className="px-6 py-6 space-y-2">
                    <Typography.Text className="text-lg">23,456</Typography.Text>
                    <div className="flex items-center justify-between">
                        <Typography.Text>In total</Typography.Text>
                        <span>{icons.progressIcon()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsMobile;
