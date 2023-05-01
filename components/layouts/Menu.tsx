import React, { useState } from 'react';
import { Menu as AntdMenu, Result, Typography } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { constants } from './constants';
import icons from '@/icons';

const Menu = () => {
    const { pathname } = useRouter();
    const pathnameArray = pathname.split('/');

    return (
        <section className="flex flex-col justify-between h-full overflow-y-auto overflow-x-hidden">
            <div className="space-y-10 py-6 px-4">
                <div className="relative w-[112px] h-[28px]">
                    <Image src="/svgs/logo.svg" alt="logo" fill />
                </div>
                <div className="rounded-xl shadow overflow-hidden">
                    <AntdMenu
                        defaultSelectedKeys={[pathname]}
                        selectedKeys={[`/${pathnameArray[1]}`]}
                        defaultOpenKeys={[...pathnameArray]}
                        mode="inline"
                    >
                        {constants.APP_MENU.map(({ icon, link, name }) => (
                            <AntdMenu.Item
                                icon={<div className="text-base fill-current">{icon}</div>}
                                key={link}
                                className="text-base text-black font-medium bg-transparent !rounded-none !px-5"
                            >
                                <Link href={link} passHref className="!text-black">
                                    {name}
                                </Link>
                            </AntdMenu.Item>
                        ))}
                    </AntdMenu>
                </div>

                <div className="px-5 rounded-xl shadow overflow-hidden">
                    <Typography.Text className="block mb-4 text-[#A0A0AB] text-xs">Coming Soon</Typography.Text>
                    <div className="space-y-1">
                        {constants.COMING_SOON_APP_MENU.map(({ name }) => (
                            <div
                                key={name}
                                className="text-base text-black font-medium bg-transparent hover:bg-transparent py-2"
                            >
                                {name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl shadow overflow-hidden">
                    <AntdMenu
                        defaultSelectedKeys={[pathname]}
                        selectedKeys={[`/${pathnameArray[1]}`]}
                        defaultOpenKeys={[...pathnameArray]}
                        mode="inline"
                    >
                        {constants.USER_ACTIONS.map(({ icon, link, name }) => (
                            <AntdMenu.Item
                                icon={<div className="text-base fill-current">{icon}</div>}
                                key={link}
                                className="text-base text-black font-medium bg-transparent !rounded-none"
                            >
                                <Link href={link} passHref className="!text-black">
                                    {name}
                                </Link>
                            </AntdMenu.Item>
                        ))}
                    </AntdMenu>
                </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#EBECF2] py-4 px-4">
                <div className="flex items-center space-x-2">
                    <div className="border border-dashed border-[#3F3F46] h-[24px] w-[24px] rounded-full flex items-center justify-center">
                        B
                    </div>
                    <Typography.Text>Gbadebo N</Typography.Text>
                </div>
                <span>{icons.rightIcon()}</span>
            </div>
        </section>
    );
};

export default Menu;
