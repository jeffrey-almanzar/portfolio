import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';

import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';


import Hero from '../components/Hero';
import Accordions from '../components/Accordions';

import experienceData from '../data/experience';
import credentialsData from '../data/credentials';
import About from '../components/About';


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
              <About />
              {/* <!-- Experience --> */}
              <div id="experience" className="section">
                <h2 className="mb-4">Experience</h2>
                <Accordions accordions={experienceData} />
              </div>
              {/* <!-- Credentials --> */}
              <div id="credentials" className="section">
                <h2 className="mb-3">Credentials</h2>
                <Accordions accordions={credentialsData} />
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
