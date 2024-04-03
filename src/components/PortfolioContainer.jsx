import { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import ProjectList from './pages/ProjectList';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

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
            <header>
                <h1 className="">Evelyn Eidsath</h1>
                <p className="">Full-stack web developer</p>
            </header>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <main> {renderPage()}</main>
            <Footer />
        </div>
    );
}