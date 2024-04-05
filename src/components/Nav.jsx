function Nav({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar nav-menu">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projectList" onClick={() => handlePageChange('ProjectList')} className={currentPage === 'ProjectList' ? 'nav-link active' : 'nav-link'}>
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;