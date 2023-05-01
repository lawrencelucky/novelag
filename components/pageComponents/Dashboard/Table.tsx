import React from 'react';
import { Typography, Table as AntdTable, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import icons from '@/icons';

interface DataType {
    key: string;
    size: string;
    location: string;
    crops: string;
    status: string;
    name: string;
}

const Table = () => {
    const data: DataType[] = [
        {
            crops: 'Rice, Corn...',
            key: '1',
            location: 'Kaduna',
            name: 'Kakamo Farms',
            size: '8 Hectares',
            status: 'Active',
        },
        {
            crops: 'Rice, Corn...',
            key: '2',
            location: 'Kaduna',
            name: 'Kakamo Farms',
            size: '8 Hectares',
            status: 'Active',
        },
        {
            crops: 'Rice, Corn...',
            key: '3',
            location: 'Kaduna',
            name: 'Kakamo Farms',
            size: '8 Hectares',
            status: 'Inactive',
        },
        {
            crops: 'Rice, Corn...',
            key: '4',
            location: 'Kaduna',
            name: 'Kakamo Farms',
            size: '8 Hectares',
            status: 'Active',
        },
        {
            crops: 'Rice, Yam',
            key: '5',
            location: 'Kaduna',
            name: 'Kakamo Farms',
            size: '8 Hectares',
            status: 'Inactive',
        },
        {
            crops: 'Rice, Corn...',
            key: '6',
            location: 'Kaduna',
            name: 'Kakamo Farms',
            size: '8 Hectares',
            status: 'Inactive',
        },
        {
            crops: 'Rice, Yam',
            key: '7',
            location: 'Kaduna',
            name: 'Kakamo Farms',
            size: '8 Hectares',
            status: 'Active',
        },
        {
            crops: 'Rice, Corn...',
            key: '8',
            location: 'Kaduna',
            name: 'Kakamo Farms',
            size: '8 Hectares',
            status: 'Active',
        },
        {
            crops: 'Rice, Yam',
            key: '9',
            location: 'Kaduna',
            name: 'Kakamo Farms',
            size: '8 Hectares',
            status: 'Inactive',
        },
        {
            crops: 'Rice, Corn...',
            key: '10',
            location: 'Kaduna',
            name: 'Kakamo Farms',
            size: '8 Hectares',
            status: 'Active',
        },
    ];

    const columns: ColumnsType<DataType> = [
        {
            dataIndex: 'name',
            key: 'name',
            render: (text) => <Typography.Text>{text}</Typography.Text>,
            title: 'Name',
            width: 150,
        },
        {
            dataIndex: 'size',
            key: 'size',
            render: (text) => <Typography.Text>{text}</Typography.Text>,
            title: (
                <span className="flex items-center">
                    Size <span className="ml-2">{icons.helpIcon()}</span>
                </span>
            ),
            width: 150,
        },
        {
            dataIndex: 'location',
            key: 'location',
            render: (text) => <Typography.Text>{text}</Typography.Text>,
            title: 'Location',
            width: 150,
        },
        {
            dataIndex: 'crops',
            key: 'crops',
            render: (text) => <Typography.Text>{text}</Typography.Text>,
            title: 'Crop (s)',
            width: 150,
        },
        {
            dataIndex: 'status',
            key: 'status',
            render: (text) => (
                <Typography.Text
                    className={`${text === 'Active' ? 'bg-[#D8F7C7]' : 'bg-[#F8DCE3]'} px-2 py-1 rounded-full`}
                >
                    {text}
                </Typography.Text>
            ),
            title: 'Status',
            width: 150,
        },
        {
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <div className="space-x-4 flex">
                    <p>Edit</p>
                    <p>View</p>
                </div>
            ),
            title: 'Action',
            width: 150,
        },
    ];

    return (
        <div>
            <Typography.Text className="text-lg block mb-5">Farms</Typography.Text>
            <div className="rounded-2xl overflow-hidden no-scrollbar">
                <AntdTable
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: 'max-content', y: 'max-content' }}
                    pagination={false}
                    className="no-scrollbar"
                />
                <div className="flex justify-center lg:justify-end mt-6 space-x-10">
                    <div className="flex items-center space-x-2">
                        <Typography.Text className="text-[#A0A0AB]">Rows per page:</Typography.Text>
                        <span className="flex items-center">4 {icons.arrowDown()}</span>
                    </div>

                    <div className="flex items-center space-x-5">
                        <Typography.Text className="text-[#A0A0AB]">1 - 8 of 124</Typography.Text>
                        <div className="flex items-center space-x-2">
                            <span>{icons.leftIcon()}</span>
                            <span>{icons.rightIconBig()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
