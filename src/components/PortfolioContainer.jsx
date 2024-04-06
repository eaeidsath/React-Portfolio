import { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import ProjectList from './pages/ProjectList';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import { BoxIconElement } from 'boxicons';

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
            <header id='header'>
                <div className='d-flex flex-column'>
                    <div className='profile'>
                        <img src='/81021761.jpg' className='header-img img-fluid'></img>
                        <h1>Evelyn Eidsath</h1>
                        <p>Full-stack web developer</p>
                        <div className='social-links text-center'>
                            <a href='https://www.linkedin.com/in/evelyn-eidsath-915b9b226/'><box-icon type="logo" name="linkedin-square"></box-icon></a>
                            <a href='https://github.com/eaeidsath'><box-icon type="logo" name="github"></box-icon></a>
                            <a href="mailto: evelyneidsath@gmail.com"><box-icon type="logo" name="gmail"></box-icon></a>
                        </div>
                    </div>
                </div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            <main> {renderPage()}</main>
            <Footer />
        </div>
    );
}