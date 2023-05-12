import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';

import { Heading } from '@chakra-ui/react'
import ProjectCard from '@/components/ProjectCard';

import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';


import Hero from '../components/Hero';
import Accordions from '../components/Accordions';

import experienceData from '../data/experience';
import credentialsData from '../data/credentials';
import About from '../components/About';

export default function Home() {
  useEffect(() => {
    const typed = new Typed("#my-name", {
      strings: ["Jeffrey Almanzar."],
      typeSpeed: 90,
      showCursor: false,
      startDelay: 150,
      loop: false
    });
    return () => { // acts as a component willUnMount
      typed.destroy();
    }
  }, []);

  return (
    <>
      <Hero />
      <main>
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
                <Heading mb={5}>Experience</Heading>
                <Accordions accordions={experienceData} />
              </div>
              {/* <!-- Credentials --> */}
              <div id="credentials" className="section">
                <Heading mb={5}>Credentials</Heading>
                <Accordions accordions={credentialsData} />
              </div>
              {/* <!-- Projects --> */}
              <div id="projects" className="section">
                <Heading mb={5}>Projects</Heading>
                <div id="projects-skills" className="group">
                  <div className="project-container">
                    {/* <!-- PROJECT 0 --> */}
                    <ProjectCard
                      title="Remote Job Board for JavaScript Developers"
                      url="https://github.com/Jeffrey-A/remotejavascriptjobs#preview"
                      leadText="Advanced remote job board that list JavaScript jobs, allowing the user to filter by employment type, development type, main technology, and salary estimation.  In addition, it allows employers to post job ads after making a payment through the integrated Stripe payment gateway."
                      features={[
                        'Fetches and displays jobs stored in a Firebase real-time database instance',
                        'Allows employers to post job ads after making a payment.',
                        'Integrated the Stripe API to handle payments.',
                        'Integrated the SendGrid API to send payment confirmation emails.',
                        'Setup markdown blog using the gray-matter npm package.',
                        'Dark and light theme modes.',
                      ]}
                      skills={[
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'React JS',
                        'Next JS',
                        'Stripe',
                        'Firebase',
                        'Sendgrid',
                      ]}
                    />
                    {/* <!-- PROJECT 1 --> */}
                    <ProjectCard
                      title="Goals Management App"
                      url="https://github.com/Jeffrey-A/build-your-future-today#preview"
                      leadText="Multi-user goals management system that allows users to
                      create goals, create daily tasks for their goals, and
                      keep track of their progress."
                      features={[
                        'Allows creating, editing, and deleting goals from the system.',
                        'Allows creating, editing, and deleting tasks for each goal.',
                        'Implemented a Goal Lister page where you can view all the goals at once or filter by name.',
                        'Implemented a drag and drop goals Board using browser native events.',
                        'Implemented user authentication, so that a user can create an account and start managing his goals after logging in.',

                      ]}
                      skills={[
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'React JS',
                        'Node JS',
                        'Express',
                        'PostgreSQL',
                      ]}
                    />
                    {/* <!-- PROJECT 2 --> */}
                    <ProjectCard
                      title='Online Shopping Store for Women'
                      url="https://github.com/Jeffrey-A/eCommerceProject#home"
                      leadText='Full stack e-commerce with shopping cart functionality,
                      real payment handling and mobile friendly.'
                      features={[
                        'Fetches and displays available products stored in a PostgreSQL database.',
                        'Implemented shopping cart functionality, allowing the user to add multiple products to the cart, select quantity for each product and display the total price to pay.',
                        'Integrated the Stripe API to handle payments.',
                      ]}
                      skills={[
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'React JS',
                        'Node JS',
                        'Express',
                        'PostgreSQL',
                      ]}
                    />
                    {/* <!-- PROJECT 3 --> */}
                    <ProjectCard
                      title='City Search'
                      url="https://github.com/Jeffrey-A/citySearch#preview"
                      leadText='When given a city name, it fetches and displays all the
                      zip codes of the given city and displays information
                      about each zip code.'
                      features={[
                        'Allows the user to input a city name.',
                        'Gets zip code information for the inputted city from a third party API.',
                        'Displays all the zip codes for the given city.',
                        'Displays state, location, population, and total wages for each zip code.',
                      ]}
                      skills={[
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'React JS',
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside id="contact" className="contact-section section text-center">
        <div className="container">
          <Heading mb={5}>Get in Touch</Heading>
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
