import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';

import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';


import Hero from '../components/Hero';

export default function Home() {
  useEffect(() => {
    const typed = new Typed("#name", {
      strings: ["Jeffrey Almanzar."],
      typeSpeed: 90,
      showCursor: false,
      startDelay: 150,
      loop: false
    });
  }, []);

  return (
    <>
      <Hero />
      <main>
        {/* <!-- **************************************
        Desktop Tabs
            ************************************** --> */}
        <div>
          <div className="container">
            <div className="position-relative">
              <div className="photo-container-wrapper position-absolute d-none d-lg-block">
                <div className="photo-container">
                  <img src="images/hero-photo.png" alt="Jeffrey Almanzar" />
                </div>
              </div>
              {/* <!-- Overview --> */}
              <div id="about" className="section">
                <h2 className="mb-4">About</h2>
                <div className="d-lg-flex align-items-center p-3 my-4 skills-section">
                  <p className="me-3 mb-3 mb-lg-0 primary-skill-label">Primary Skills: </p>
                  <div className="d-flex flex-wrap align-items-center">
                    <button
                      className="btn primary-skill d-flex justify-content-between align-items-center mb-2 mb-lg-0 me-2"
                      data-bs-placement="bottom" data-bs-toggle="tooltip" data-bs-html="true" title="
                                        <div className='py-3'>
                                        <p>Proficient in:</p>
                                        <div className='skills-grid'>
                                            <span className='btn btn-secondary btn-sm skill'>HTML</span>
                                            <span className='btn btn-secondary btn-sm skill'>CSS</span>
                                            <span className='btn btn-secondary btn-sm skill'>JavaScript</span>
                                            <span className='btn btn-secondary btn-sm skill'>Sass</span>
                                            <span className='btn btn-secondary btn-sm skill'>Bootstrap 5</span>
                                            <span className='btn btn-secondary btn-sm skill'>React JS</span>
                                        </div>
                                        <p className='mt-3'>Prior experience:</p>
                                        <div className='skills-grid'>
                                            <span className='btn btn-secondary btn-sm skill'>TypeScript</span>
                                            <span className='btn btn-secondary btn-sm skill'>Redux</span>
                                            <span className='btn btn-secondary btn-sm skill'>Storybook</span>
                                            <span className='btn btn-secondary btn-sm skill'>jQuery</span>
                                        </div>
                                        </div>
                                        ">
                      <span className="me-2">Frontend Development</span>
                      <i className="fa-solid fa-circle-info"></i>
                    </button>
                    <button
                      className="btn primary-skill d-flex mb-2 mb-lg-0 justify-content-between align-items-center me-2"
                      data-bs-placement="bottom" data-bs-toggle="tooltip" data-bs-html="true" title="
                                        <div className='py-3'>
                                        <p>Proficient in:</p>
                                        <div className='skills-grid'>
                                            <span className='btn btn-secondary btn-sm skill'>Node JS</span>
                                        </div>
                                        <p className='mt-3'>Prior experience:</p>
                                        <div className='skills-grid'>
                                            <span className='btn btn-secondary btn-sm skill'>Next JS</span>
                                            <span className='btn btn-secondary btn-sm skill'>Express JS</span>
                                            <span className='btn btn-secondary btn-sm skill'>PostgreSQL</span>
                                            <span className='btn btn-secondary btn-sm skill'>MySQL</span>
                                            <span className='btn btn-secondary btn-sm skill'>Firebase</span>
                                            <span className='btn btn-secondary btn-sm skill'>Python</span>
                                            <span className='btn btn-secondary btn-sm skill'>Java</span>
                                        </div>
                                        </div>
                                        ">
                      <span className="me-2">Backend Development</span>
                      <i className="fa-solid fa-circle-info"></i>
                    </button>
                    <button
                      className="btn primary-skill d-flex justify-content-between align-items-center mb-2 mb-lg-0 me-2"
                      data-bs-placement="bottom" data-bs-toggle="tooltip" data-bs-html="true" title="
                                        <div className='py-3'>
                                        <p>Prior experience:</p>
                                        <div className='skills-grid'>
                                            <span className='btn btn-secondary btn-sm skill'>Cypress.io</span>
                                            <span className='btn btn-secondary btn-sm skill'>Jest.io</span>
                                            <span className='btn btn-secondary btn-sm skill'>Enzyme</span>
                                        </div>
                                        </div>
                                        ">
                      <span className="me-2">Testing Tools</span>
                      <i className="fa-solid fa-circle-info"></i>
                    </button>
                    <button
                      className="btn primary-skill d-flex justify-content-between align-items-center mb-2 mb-lg-0 me-2"
                      data-bs-placement="bottom" data-bs-toggle="tooltip" data-bs-html="true" title="
                                        <div className='py-3'>
                                        <p>Familiar with:</p>
                                        <div className='skills-grid'>
                                            <span className='btn btn-secondary btn-sm skill'>Adobe XD</span>
                                            <span className='btn btn-secondary btn-sm skill'>Figma</span>
                                        </div>
                                        </div>
                                        ">
                      <span className="me-2">Design Tools</span>
                      <i className="fa-solid fa-circle-info"></i>
                    </button>
                  </div>
                </div>
                <div className="d-lg-flex justify-content-between">
                  <div className="about-photo-container mb-3 mb-0">
                    <img src="images/about-image.jpeg" alt="Jeffrey Almanzar" />
                  </div>
                  <div className="about-text">
                    <p className="lead">
                      Hi, my name is Jeffrey Almanzar, and I’ve been in the web development industry
                      for more than three years. You can see a few of the projects that I've
                      contributed while working at RubensteinTech, <a target="_blank"
                        href="https://www.rubensteintech.com/team/jeffrey-almanzar.html">here</a>.
                    </p>
                    <p>I learned the basics of programming in college studying computer science. My
                      curiosity led me to discover the web development field, and I learned the basics
                      of HTML, CSS, and JavaScript on my own.
                    </p>
                    <p>
                      While in college, my web development skills were taken to the next level on an
                      intensive
                      technical bootcamp focused on full stack JavaScript development. This bootcamp
                      helped me
                      get my first software engineering internship at Schoology, which helped me get
                      another two internships at RubensteinTech,
                      where I stayed working full time as software engineer right after completing my
                      degree.
                    </p>
                    <p>
                      Thanks to the experience gained at Schoology and RubensteinTech, I found out
                      that my
                      most fulfillment task is implementing user interfaces following design
                      guidelines.
                      Therefore, to better understand users and empathize with them, I completed the
                      Google UX
                      Design certificate on June 2022.
                    </p>
                    <p>
                      To learn more about me, feel free to contact me, <a target="_blank"
                        href="mailto:almanzarortizjeffrey@gmail.com">here</a>.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Experience --> */}
              <div id="experience" className="section">
                <h2 className="mb-4">Experience</h2>

                <div id="experience-acc">
                  <h3>RubensteinTech</h3>
                  <div>
                    <div className="experience d-flex">
                      <div className="logo-container">
                        <a target="_blank" href="https://www.rubensteintech.com/">
                          <i className="fa-solid fa-building"></i>
                        </a>
                      </div>
                      <div className="experience-content">
                        <h3 className="company mb-3">
                          <a target="_blank"
                            href="https://www.rubensteintech.com/">RubensteinTech</a>
                        </h3>
                        <div>
                          <h4 className="position">Software Engineer</h4>
                          <p className="date-location">
                            <span className="location">Remote</span>Jun 2020 - Present
                          </p>
                          <ul className="description-list">
                            <li>Help less experienced developers resolve technical problems when
                              they are stuck in a given task.</li>
                            <li>Perform code reviews to maintain code quality, spot bugs before
                              they are introduced, and help less experienced developers get
                              more familiar with the code base.</li>
                            <li>Implement foundational styles such as typography, iconography,
                              color palettes, layout and others, following design guidelines.
                            </li>
                            <li>Implement responsive React.js components following mockups.
                              Then, I test and document them using Storybook.</li>
                            <li>Implement responsive React.js templates using the foundational
                              styles and individual components.</li>
                            <li>Implement printer friendly styles to ensure that pages look good
                              when printed.</li>
                            <li>Perform accessibility audits using Pa11y and resolve the errors
                              found.</li>
                            <li>Perform content migration, which involves creating Node.js
                              scripts to extra the data from the legacy database and import it
                              into the RubensteinTech&rsquo;s database.</li>
                            <li>
                              Utilize HTML, CSS, JavaScript, React.js, Sass, Storybook,
                              Node.js, ElasticSearch, Git, and more tools.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="position">Software Engineer Intern</h4>
                          <p className="date-location">
                            <span className="location">New York, NY</span> Jan 2020 - May
                            2020
                          </p>
                          <p></p>
                          <ul className="description-list">
                            <li>
                              Fixed several web content accessibility issues following
                              the WCAG 2.0 guidelines. For example, made dropdowns,
                              search-boxes/autocomplete menus, and a date-picker more
                              accessible following the ComboBox, ListBox, and Dialog
                              Design patterns.
                            </li>
                            <li>
                              Fixed styling issues on PDF files generated from HTML
                              after upgrading from wkhtmltopdf to Puppeteer.
                            </li>
                            <li>
                              Implemented multiple test suites using Cypress.io.
                            </li>
                            <li>
                              Utilized HTML, CSS, SASS, JavaScript, jQuery,
                              Cypress.io, Perl, Mason.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="position">Software Engineer Intern</h4>
                          <p className="date-location">
                            <span className="location">New York, NY</span>Sep 2019 - Dec
                            2019
                          </p>
                          <ul className="description-list">
                            <li>
                              Taught myself test automation using Cypress.io,
                              leveraged knowledge in Git, CSS, and JavaScript, and use
                              the Chrome Developer Tools for debugging purposes.
                            </li>
                            <li>
                              Helped to improve test execution time by 10 minutes, by
                              finding a secure way to recycle access tokens so that
                              login API calls can be reduced within test cases.
                            </li>
                            <li>
                              Implemented end-to-end tests, ensuring that server-side
                              requests and the UI behave as expected.
                            </li>
                            <li>
                              Documented bugs creating GitLab issues and Trello cards.
                            </li>
                            <li>
                              Utilized JavaScript, Cypress.io, CSS, Git, GitLab,
                              Trello, and the Chrome Developer Tools.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>Schoology</h3>
                  <div>
                    <div className="experience d-flex">
                      <div className="logo-container">
                        <a target="_blank"
                          href="https://www.powerschool.com/solutions/unified-classroom/schoology-learning/">
                          <i className="fa-solid fa-building"></i>
                        </a>
                      </div>
                      <div className="experience-content">
                        <h3 className="company mb-3">
                          <a target="_blank"
                            href="https://www.powerschool.com/solutions/unified-classroom/schoology-learning/">Schoology</a>
                        </h3>
                        <div className="position-container">
                          <h4 className="position">Software Engineer Intern</h4>
                          <p className="date-location">
                            <span className="location">New York, NY</span>Jun 2019 - Aug
                            2019
                          </p>

                          <ul className="description-list">
                            <li>
                              Leveraged knowledge in Git, Front-end web development
                              (HTML, CSS, JavaScript, React.js), improved my
                              communication skills through daily standups, taught
                              myself browser extension development and unit testing
                              libraries such as Jest and Enzyme, and debugged using
                              the Chrome Developer Tools.
                            </li>
                            <li>
                              Developed a browser extension that allows Schoology’s
                              employees to masquerade as external clients. Created it
                              using HTML, CSS, JavaScript, Chrome API, and Schoology
                              APIs.
                            </li>
                            <li>
                              Implemented an autocomplete feature to an existing menu
                              and improved its UI using HTML, CSS, React.js and
                              TypeScript.
                            </li>
                            <li>
                              Wrote unit tests using Jest and Enzyme and used Bamboo
                              to deploy my changes to different environments.
                            </li>
                            <li>
                              Utilized JavaScript, React.js, TypeScript, HTML, CSS,
                              Jest, Enzyme, Git, Jira, Bamboo, and Chrome API.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>CUNY Bronx Community College</h3>
                  <div>
                    <div className="experience d-flex">
                      <div className="logo-container">
                        <a target="_blank" href="http://www.bcc.cuny.edu/">
                          <i className="fa-solid fa-building"></i>
                        </a>
                      </div>
                      <div className="experience-content">
                        <h3 className="company mb-3">
                          <a target="_blank" href="http://www.bcc.cuny.edu/">CUNY Bronx Community
                            College</a>
                        </h3>
                        <div>
                          <h4 className="position">Computer Science Tutor</h4>
                          <p className="date-location">
                            <span className="location">Bronx, NY</span>Aug 2018 - Jun 2019
                          </p>
                          <ul className="description-list">
                            <li>
                              Helped computer science students with programming I, II,
                              and data structures and algorithms using Python.
                            </li>
                            <li>
                              Helped them to understand fundamental programming
                              concepts, like variables, loops, functions, classes, and
                              more advanced data structures and algorithms concepts.
                            </li>
                            <li>
                              Assisted them in the debugging and implementation of
                              Python’s programs.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="position">College Athlete/Baseball Player</h4>
                          <p className="date-location">
                            <span className="location">Bronx, NY</span>Feb 2017 - May 2018
                          </p>
                          <ul className="description-list">
                            <li>
                              Played two consecutive seasons in the Bronx Community
                              College's Baseball Team. We built an amazing chemistry,
                              we trained and played hard, and we made it to the
                              championship game.
                            </li>
                            <li>
                              Honors received:
                              <ul className="description-list">
                                <li>NJCAA Region XV Sportsmanship Honoree 05/2018</li>
                                <li>
                                  CUNY-Athletic Conference-Scholar-Athlete award
                                  05/2018
                                </li>
                                <li>
                                  CUNY-Athletic Conference-Scholar-Athlete award
                                  05/2017
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>QSAC (Quality Services for the Autism Community)</h3>
                  <div>
                    <div className="experience d-flex">
                      <div className="logo-container">
                        <a target="_blank" href="https://www.qsac.com/">
                          <i className="fa-solid fa-building"></i>
                        </a>
                      </div>
                      <div className="experience-content">
                        <h3 className="company mb-3">
                          <a target="_blank" href="https://www.qsac.com/">QSAC (Quality Services
                            for the
                            Autism Community)</a>
                        </h3>
                        <div>
                          <h4 className="position">Therapy Assistant</h4>
                          <p className="date-location">
                            <span className="location">Bronx, NY</span>Nov 2017 - Feb 2018
                          </p>
                          <ul className="description-list">
                            <li>
                              Assisted a youth group of 5 children in their reading
                              comprehension.
                            </li>
                            <li>
                              Taught life skills such as personal hygiene,
                              socialization skills, recreation, and some academics.
                            </li>

                            <li>
                              Maintained an organized and well-established working
                              environment.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Credentials --> */}
              <div id="credentials" className="section">
                <h2 className="mb-3">Credentials</h2>
                <div id="credentials-acc">
                  <h3>Degrees</h3>
                  <div>
                    {/* <!-- Lehman --> */}
                    <div className="experience d-flex">
                      <div className="logo-container">
                        <a target="_blank"
                          href="http://lehman.smartcatalogiq.com/en/2017-2019/Undergraduate-Bulletin/Academic-Departments-and-Programs/Computer-Science/Computer-Science-B-S-57-61-Credit-Major">
                          <i className="fa-solid fa-building"></i>
                        </a>
                      </div>
                      <div className="experience-content">
                        <h3 className="company mb-3">
                          <a target="_blank"
                            href="http://lehman.smartcatalogiq.com/en/2017-2019/Undergraduate-Bulletin/Academic-Departments-and-Programs/Computer-Science/Computer-Science-B-S-57-61-Credit-Major">Lehman
                            College (CUNY)</a>
                        </h3>
                        <div>
                          <h4 className="position">
                            Bachelor of Science in Computer Science
                          </h4>
                          <p className="date-location">2019 - 2020</p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- BCC --> */}
                    <div className="experience d-flex">
                      <div className="logo-container">
                        <a target="_blank"
                          href="http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/">
                          <i className="fa-solid fa-building"></i>
                        </a>
                      </div>
                      <div className="experience-content">
                        <h3 className="company mb-3">
                          <a target="_blank"
                            href="http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/">Bronx
                            Community College (CUNY)</a>
                        </h3>
                        <div>
                          <h4 className="position">
                            Associate of Science in Computer Science
                          </h4>
                          <p className="date-location">2017 - 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3>Certificates</h3>
                  <div>
                    {/* <!-- Google UX Design Certificate --> */}
                    <div className="experience d-flex">
                      <div className="logo-container">
                        <a target="_blank"
                          href="https://grow.google/certificates/ux-design/#?modal_active=none">
                          <i className="fa-solid fa-building"></i>
                        </a>
                      </div>
                      <div className="experience-content">
                        <h3 className="company mb-3">
                          <a target="_blank"
                            href="https://grow.google/certificates/ux-design/#?modal_active=none">Coursera</a>
                        </h3>
                        <div>
                          <h4 className="position">Google UX Design Certificate</h4>
                          <p className="date-location">Jun 2022</p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Full Stack Web Development  --> */}
                    <div className="experience d-flex">
                      <div className="logo-container">
                        <a target="_blank" href="https://lehmancuny2x.github.io/">
                          <i className="fa-solid fa-building"></i>
                        </a>
                      </div>
                      <div className="experience-content">
                        <h3 className="company mb-3">
                          <a target="_blank" href="https://lehmancuny2x.github.io/">Tech Talent
                            Pipiline
                            Recidensy Program at Lehman
                            College</a>
                        </h3>
                        <div>
                          <h4 className="position">
                            Full Stack Web Development Certificate
                          </h4>
                          <p className="date-location">Jun 2019</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3>Honors & Awards</h3>
                  <div>
                    {/* <!-- BCC Honor--> */}
                    <div className="experience d-flex">
                      <div className="logo-container">
                        <a target="_blank"
                          href="http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/">
                          <i className="fa-solid fa-building"></i>
                        </a>
                      </div>
                      <div className="experience-content">
                        <h3 className="company mb-3">
                          <a target="_blank"
                            href="http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/">Bronx
                            Community College</a>
                        </h3>
                        <div>
                          <h4 className="position">Computer Science Award</h4>
                          <p className="date-location">
                            May 2019 | Computer Science award for outstanding academic
                            achievement in Computer Science.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Lehman Honor--> */}
                    <div className="experience d-flex">
                      <div className="logo-container">
                        <a target="_blank"
                          href="http://lehman.smartcatalogiq.com/en/2017-2019/Undergraduate-Bulletin/Academic-Departments-and-Programs/Computer-Science/Computer-Science-B-S-57-61-Credit-Major">
                          <i className="fa-solid fa-building"></i>
                        </a>
                      </div>
                      <div className="experience-content">
                        <h3 className="company mb-3">
                          <a target="_blank"
                            href="http://lehman.smartcatalogiq.com/en/2017-2019/Undergraduate-Bulletin/Academic-Departments-and-Programs/Computer-Science/Computer-Science-B-S-57-61-Credit-Major">Lehman
                            College</a>
                        </h3>
                        <div>
                          <h4 className="position">
                            Guttman Transfer Scholarship Recipient
                          </h4>
                          <p className="date-location">Jan 2019</p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- BCC Honor--> */}
                    <div className="experience d-flex">
                      <div className="logo-container">
                        <a target="_blank"
                          href="http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/">
                          <i className="fa-solid fa-building"></i>
                        </a>
                      </div>
                      <div className="experience-content">
                        <h3 className="company mb-3">
                          <a target="_blank"
                            href="http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/">Bronx
                            Community College</a>
                        </h3>
                        <div>
                          <h4 className="position">
                            Bronx Community College Foundation Scholarship Recipient
                          </h4>
                          <p className="date-location">Sep 2018</p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- BCC Honor--> */}
                    <div className="experience d-flex">
                      <div className="logo-container">
                        <a target="_blank"
                          href="http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/">
                          <i className="fa-solid fa-building"></i>
                        </a>
                      </div>
                      <div className="experience-content">
                        <h3 className="company mb-3">
                          <a target="_blank"
                            href="http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/">Bronx
                            Community College</a>
                        </h3>
                        <div>
                          <h4 className="position">
                            CUNY-Athletic Conference-Scholar-Athlete Award
                          </h4>
                          <p className="date-location">May 2018</p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- BCC Honor--> */}
                    <div className="experience d-flex">
                      <div className="logo-container">
                        <a target="_blank"
                          href="http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/">
                          <i className="fa-solid fa-building"></i>
                        </a>
                      </div>
                      <div className="experience-content">
                        <h3 className="company mb-3">
                          <a target="_blank"
                            href="http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/">Bronx
                            Community College</a>
                        </h3>
                        <div>
                          <h4 className="position">
                            CUNY-Athletic Conference-Scholar-Athlete Award
                          </h4>
                          <p className="date-location">May 2017</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Projects --> */}
              <div id="projects" className="section">
                <h2 className="mb-3">Projects</h2>
                <div id="projects-skills" className="group">
                  <div className="project-container">
                    {/* <!-- PROJECT 0 --> */}
                    <div id="pro-0" className="projects p-4">
                      <div className="project-title">
                        <a href="https://github.com/Jeffrey-A/remotejavascriptjobs#preview" target="_blank">
                          <h3 className="mb-2">Remote Job Board for JavaScript Developers</h3>
                        </a>
                      </div>
                      <div className="project-description">
                        <p className="lead">
                          Advanced remote job board that list JavaScript jobs, allowing the user to filter by employment type, development type, main technology, and salary estimation.  In addition, it allows employers to post job ads after making a payment through the integrated Stripe payment gateway.
                        </p>
                        <p className="main-features">Main features</p>
                        <ul>
                          <li>Fetches and displays jobs stored in a Firebase real-time database instance.</li>
                          <li>Allows employers to post job ads after making a payment.</li>
                          <li>Integrated the Stripe API to handle payments.</li>
                          <li>Integrated the SendGrid API to send payment confirmation emails.</li>
                          <li>Setup markdown blog using the gray-matter npm package.</li>
                          <li>Dark and light theme modes.</li>
                        </ul>
                      </div>
                      <div className="project-content group">
                        <div className="d-flex project-skils">
                          <div className="pro-tools-container">
                            <p>
                              <span className="btn btn-sm btn-light">HTML</span>
                              <span className="btn btn-sm btn-light">CSS</span>
                              <span className="btn btn-sm btn-light">JavaScript</span>
                              <span className="btn btn-sm btn-light">React JS</span>
                              <span className="btn btn-sm btn-light">Next JS</span>
                              <span className="btn btn-sm btn-light">Stripe</span>
                              <span className="btn btn-sm btn-light">Firebase</span>
                              <span className="btn btn-sm btn-light">Sendgrid</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <a target="_blank" href="https://github.com/Jeffrey-A/remotejavascriptjobs#preview"
                        className="btn btn-hover btn-primary">Preview</a>
                    </div>
                    {/* <!-- PROJECT 1 --> */}
                    <div id="pro-1" className="projects p-4">
                      <div className="project-title">
                        <a href="https://github.com/Jeffrey-A/build-your-future-today#preview"
                          target="_blank">
                          <h3 className="mb-2">Goals Management App</h3>
                        </a>
                      </div>
                      <div className="project-description">
                        <p className="lead">
                          Multi-user goals management system that allows users to
                          create goals, create daily tasks for their goals, and
                          keep track of their progress.
                        </p>
                        <p className="main-features">Main features</p>
                        <ul>
                          <li>Allows creating, editing, and deleting goals from the system.</li>
                          <li>Allows creating, editing, and deleting tasks for each goal.</li>
                          <li>Implemented a Goal Lister page where you can view all the goals at once or filter by name.</li>
                          <li>Implemented a drag and drop goals Board using browser native events.</li>
                          <li>Implemented user authentication, so that a user can create an account and start managing his goals after logging in.</li>
                        </ul>
                      </div>
                      <div className="project-content group">
                        <div className="d-flex project-skils">
                          <div className="pro-tools-container">
                            <p>
                              <span className="btn btn-sm btn-light">HTML</span>
                              <span className="btn btn-sm btn-light">CSS</span>
                              <span className="btn btn-sm btn-light">JavaScript</span>
                              <span className="btn btn-sm btn-light">React JS</span>
                              <span className="btn btn-sm btn-light">Node JS</span>
                              <span className="btn btn-sm btn-light">Express</span>
                              <span className="btn btn-sm btn-light">PostgreSQL</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <a target="_blank"
                        href="https://github.com/Jeffrey-A/build-your-future-today#preview"
                        className="btn btn-hover btn-primary">Preview</a>
                    </div>

                    {/* <!-- PROJECT 2 --> */}
                    <div id="pro-2" className="projects p-4">
                      <div className="project-title">
                        <a href="https://github.com/Jeffrey-A/eCommerceProject#home"
                          target="_blank">
                          <h3 className="mb-2">Online Shopping Store for Women</h3>
                        </a>
                      </div>

                      <div className="project-description">
                        <p className="lead">
                          Full stack e-commerce with shopping cart functionality,
                          real payment handling and mobile friendly.
                        </p>
                        <p className="main-features">Main features</p>
                        <ul>
                          <li>Fetches and displays available products stored in a PostgreSQL database.</li>
                          <li>Implemented shopping cart functionality, allowing the user to add multiple products to the cart, select quantity for each product and display the total price to pay.</li>
                          <li>Integrated the Stripe API to handle payments.</li>
                        </ul>
                      </div>
                      <div className="project-content group">
                        <div className="d-flex">
                          <div className="pro-tools-container">
                            <p>
                              <span className="btn btn-sm btn-light">HTML</span>
                              <span className="btn btn-sm btn-light">CSS</span>
                              <span className="btn btn-sm btn-light">JavaScript</span>
                              <span className="btn btn-sm btn-light">React JS</span>
                              <span className="btn btn-sm btn-light">Node JS</span>
                              <span className="btn btn-sm btn-light">Express</span>
                              <span className="btn btn-sm btn-light">PostgreSQL</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <a target="_blank" href="https://github.com/Jeffrey-A/eCommerceProject#home"
                        className="btn btn-hover btn-primary">Preview</a>
                    </div>

                    {/* <!-- PROJECT 3 --> */}
                    <div id="pro-3" className="projects p-4">
                      <div className="project-title">
                        <a href="https://github.com/Jeffrey-A/citySearch#preview" target="_blank">
                          <h3 className="mb-2">City Search</h3>
                        </a>
                      </div>

                      <div className="project-description">
                        <p className="lead">
                          When given a city name, it fetches and displays all the
                          zip codes of the given city and displays information
                          about each zip code.
                        </p>
                        <p className="main-features">Main features</p>
                        <ul>
                          <li>Allows the user to input a city name.</li>
                          <li>Gets zip code information for the inputted city from a third party API.</li>
                          <li>Displays all the zip codes for the given city.</li>
                          <li>Displays state, location, population, and total wages for each zip code.</li>
                        </ul>
                      </div>
                      <div className="project-content group">
                        <div className="d-flex">
                          <div className="pro-tools-container">
                            <p>
                              <span className="btn btn-sm btn-light">HTML</span>
                              <span className="btn btn-sm btn-light">CSS</span>
                              <span className="btn btn-sm btn-light">JavaScript</span>
                              <span className="btn btn-sm btn-light">React JS</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <a target="_blank" href="https://github.com/Jeffrey-A/citySearch#preview"
                        className="btn btn-hover btn-primary">Preview</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside id="contact" className="contact-section section text-center">
        <div className="container">
          <h2 className="mb-4">Get in Touch</h2>
          <a href="mailto:almanzarortizjeffrey@gmail.com" className="btn btn-hover btn-primary contact-cta">Get into
            my inbox</a>
          <div className="mt-4 social-media-container">
            <a className="d-inline-block me-3" target="_blank" href="https://github.com/Jeffrey-A"><i
              className="fa-brands fa-github"></i></a>
            <a className="d-inline-block" target="_blank" href="https://www.linkedin.com/in/jeffrey-almanzar/"><i
              className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </aside>
    </>
  )
}
