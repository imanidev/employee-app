import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import EmployeeData from '../data/EmployeeData';
import EmployeeList from '../components/EmployeeList';

function HomePage() {
    return (
        <div>
            <Header title='Employee Directory' />
            <SearchBar />
            <EmployeeList />
        </div>
    );
}

export default HomePage;