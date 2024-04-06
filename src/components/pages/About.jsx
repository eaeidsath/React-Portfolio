export default function About() {
    return (
        <section>
            <div className="about container">

                <div className="row">
                    <div className="col">
                        <h1 className="section-title">About Me</h1>
                        <hr></hr>
                        <div className="info-container">
                            <h3 className="subtitle">Bio</h3>
                            <div className="row info">
                                <div className="col">
                                    <ul>
                                        <li>
                                            <span>Location: San Francisco Bay Area</span>
                                        </li>
                                        <li>
                                            <span>Age: 25</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li>
                                            <span>Degree: Bachelors of Science</span>
                                        </li>
                                        <li>
                                            <span>Availability: Looking for work</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p className="intro">
                            Hello and welcome to my portfolio. This website as well as all the projects linked here are examples of my web developer experience. I starting learning front-end coding in 2022, and in 2023 I began a course to become certified in full-stack web development. I have gained experience in Javascript and related software such as nodeJS, Express, and React. I also have experience using database software including SQL and MongoDB. I will continue updating this portfolio as I gain more experience, learn new coding languages, and create new projects.
                        </p>
                    </div>
                    <div className="col">
                        <img src="/pfp.jpg" className="about-img" alt="Evelyn standing under trees"></img>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <h3 className="subtitle">Background</h3>
                </div>
                <div className="background"><p>
                    I graduated from UC Davis in 2020 with a Bachelor of Science in Food Science. From 2018 to 2021, I worked as a lab technician in a research lab owned by the USDA Agricultural Research Service (ARS), where I maintained insect colonies for pesticide testing. After that, I worked as a Quality Assurance Technician for Kerry Taste & Nutrition, and later in the same role for a Safeway-owned dairy processing plant. In those roles I performed many analytical tests, prepared microbiological incubations, and processed large amounts of data in laboratory information management system (LIMS) softwares. While these positions may not be directly related to coding and web development, they gave me invaluable experience that greatly improved my skills in decision-making, time management, communication, and teamwork, which are all vital to any successful career.
                </p>
                    <p>
                        I have been online since a young age and therefore have gained lifelong familiarity with computer software and developed an unending love for online culture. The innovation and potential surrounding the tech world is second to none, and I hope to contribute my skills and successes for the benefit of any and all who ever looked at a website and thought, "I want to make that, but better."
                    </p>
                </div>
                <p>
                    Please take a look at my projects by clicking the Projects tab, and get my resume from the Resume page. Reach out to me using the sources listed on the Contact page.
                </p>
            </div>
        </section>
    );
}
