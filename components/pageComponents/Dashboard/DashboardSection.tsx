import React from 'react';
import Cards from './Cards';
import Table from './Table';

const DashboardSection = () => {
    return (
        <div className="space-y-10 mb-20">
            <Cards />
            <Table />
        </div>
    );
};

export default DashboardSection;
