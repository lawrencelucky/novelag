import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import DashboardSection from '@/components/pageComponents/Dashboard/DashboardSection';

const Home = () => {
    return (
        <DashboardLayout title="Dashboard">
            <DashboardSection />
        </DashboardLayout>
    );
};

export default Home;
