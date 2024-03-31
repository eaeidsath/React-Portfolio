import { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import ProjectList from './pages/ProjectList';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'ProjectList') {
            return <ProjectList />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <main className=""> {renderPage()}</main>
        </div>
    );
}