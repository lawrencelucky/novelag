import React, { useState } from 'react';
import { Drawer, Layout } from 'antd';
import Header from './Header';
import Menu from './Menu';

interface IProps {
    children: React.ReactNode;
    title: string;
}

const { Header: AntdHeader, Content, Sider } = Layout;

const DashboardLayout: React.FC<IProps> = ({ children, title }) => {
    const [visible, setVisible] = useState(false);
    return (
        <Layout>
            <Drawer
                width={300}
                closable={false}
                placement="left"
                onClose={() => setVisible(false)}
                open={visible}
                className="font-primary antialiased block md:hidden !p-0"
            >
                <Menu />
            </Drawer>
            <main className="font-primary antialiased min-w-full bg-white">
                <section className="w-full overflow-hidden bg-white">
                    <div className="lg:flex lg:h-screen">
                        <Sider width={230} className="!bg-white hidden lg:block border-r border-[#EBECF2]">
                            <Menu />
                        </Sider>
                        <Layout>
                            <AntdHeader className="bg-[#FBFBFB] sticky top-0 z-0 w-full border-b border-[#EBECF2] py-4 px-[20px] lg:px-[38px] h-auto">
                                <Header setVisible={setVisible} title={title} />
                            </AntdHeader>
                            <Content>
                                <div className="overflow-y-auto bg-[#FBFBFB] h-screen px-[20px] lg:px-[38px] py-[30px] lg:py-[56px]">
                                    {children}
                                </div>
                            </Content>
                        </Layout>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default DashboardLayout;
