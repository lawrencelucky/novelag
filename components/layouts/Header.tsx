import icons from '@/icons';
import { Input, Typography } from 'antd';
import React from 'react';

interface IProps {
    title: string;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<IProps> = ({ title, setVisible }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-1 items-center space-x-16">
                <div className="flex space-x-2 items-center">
                    <span className="md:hidden" onClick={() => setVisible(true)}>
                        {icons.hamburgerIcon()}
                    </span>
                    <Typography.Text className="text-2xl font-medium">{title}</Typography.Text>
                </div>
                <Input
                    prefix={icons.searchIcon()}
                    placeholder="Search"
                    suffix="⌘S"
                    className="py-2 w-2/4 shadow-10 border border-[#FAFAF9] hidden lg:flex"
                />
            </div>
            <button className="bg-[#16B364] px-[14px] h-9 flex items-center text-white rounded-lg shadow-20">
                Add Farm <span className="ml-2">{icons.addIcon()}</span>
            </button>
        </div>
    );
};

export default Header;
