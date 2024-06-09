import { Heading, Text, Tooltip, Stack } from '@chakra-ui/react';

export default function About(props) {
    return (
        <div id="about" className="section">
            <Heading mb={4}>About</Heading>
            <div className="d-lg-flex align-items-center p-3 my-4 skills-section">
                <p className="me-3 mb-3 mb-lg-0 primary-skill-label">Primary Skills: </p>
                <Stack align="flex-start" justify="flex-start" direction={['column', 'row']} spacing='24px'>
                    <Tooltip hasArrow label={<FrontendSkills />}>
                        <button>
                            <span className="me-2">Frontend Development</span>
                            <i className="fa-solid fa-circle-info"></i>
                        </button>
                    </Tooltip>
                    <Tooltip hasArrow label={<BackendSkills />}>
                        <button>
                            <span className="me-2">Backend Development</span>
                            <i className="fa-solid fa-circle-info"></i>
                        </button>
                    </Tooltip>
                    <Tooltip hasArrow label={<TestingSkills />}>
                        <button>
                            <span className="me-2">Testing Tools</span>
                            <i className="fa-solid fa-circle-info"></i>
                        </button>
                    </Tooltip>
                    <Tooltip hasArrow label={<DesignSkills />}>
                        <button>
                            <span className="me-2">Design Tools</span>
                            <i className="fa-solid fa-circle-info"></i>
                        </button>
                    </Tooltip>
                </Stack>
            </div>
            <div className="d-lg-flex justify-content-between">
                <div className="about-photo-container mb-3 mb-0">
                    <img src="images/about-image.jpeg" alt="Jeffrey Almanzar" />
                </div>
                <div className="about-text">
                    <Text fontSize='lg' mb={3}>
                        Throughout my web development journey, I've technically led 4 projects so far at RubyLaw, performed 5 content migrations, and have contributed to almost all their <a target="_blank"
                            href="https://www.rubylaw.com/work/index.html">clients</a>. My contributions include leading the implementation of new web applications, implementing design mockups, doing system integrations, fixing web accessibility issues, mentoring other engineers, maintaining existing projects, and developing content migration scripts for new clients.
                    </Text>
                    <Text mb={3}>
                        While I have full stack JavaScript development experience, my forte is frontend development. I have experience resolving web accessibility, browser compatibility, and front-end performing issues. In addition, I'm good in responsive web design and have developed a strong eye for design throughout my experience and education. Furthermore,  I also have experience in end-to-end testing using Cypress.io and unit testing using Jest.
                    </Text>
                    <div className="mt-4 social-media-container--light">
                        <a className="d-inline-block me-3" target="_blank" href="https://github.com/Jeffrey-A"><i
                            className="fa-brands fa-github me-2"></i>GitHub</a>
                        <a className="d-inline-block" target="_blank" href="https://www.linkedin.com/in/jeffrey-almanzar/"><i
                            className="fa-brands fa-linkedin me-2"></i>LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FrontendSkills(props) {
    return (
        <div className='p-3'>
            <p>Proficient in:</p>
            <div className='skills-grid'>
                <span className='btn btn-secondary btn-sm skill'>HTML</span>
                <span className='btn btn-secondary btn-sm skill'>CSS</span>
                <span className='btn btn-secondary btn-sm skill'>JavaScript</span>
                <span className='btn btn-secondary btn-sm skill'>Sass</span>
                <span className='btn btn-secondary btn-sm skill'>Bootstrap 5</span>
                <span className='btn btn-secondary btn-sm skill'>React JS</span>
                <span className='btn btn-secondary btn-sm skill'>Git</span>
            </div>
            <p className='mt-3'>Prior experience:</p>
            <div className='skills-grid'>
                <span className='btn btn-secondary btn-sm skill'>TypeScript</span>
                <span className='btn btn-secondary btn-sm skill'>Redux</span>
                <span className='btn btn-secondary btn-sm skill'>Storybook</span>
                <span className='btn btn-secondary btn-sm skill'>jQuery</span>
            </div>
        </div>
    )
}

function BackendSkills(props) {
    return (
        <div className='p-3'>
            <p>Proficient in:</p>
            <div className='skills-grid'>
                <span className='btn btn-secondary btn-sm skill'>Node JS</span>
                <span className='btn btn-secondary btn-sm skill'>Next JS</span>
                <span className='btn btn-secondary btn-sm skill'>Firebase</span>
            </div>
            <p className='mt-3'>Prior experience:</p>
            <div className='skills-grid'>
                <span className='btn btn-secondary btn-sm skill'>Express JS</span>
                <span className='btn btn-secondary btn-sm skill'>PostgreSQL</span>
                <span className='btn btn-secondary btn-sm skill'>MySQL</span>
                <span className='btn btn-secondary btn-sm skill'>Python</span>
                <span className='btn btn-secondary btn-sm skill'>Java</span>
            </div>
        </div>
    )
}

function TestingSkills(props) {
    return (
        <div className='p-3'>
            <p>Prior experience:</p>
            <div className='skills-grid'>
                <span className='btn btn-secondary btn-sm skill'>Cypress.io</span>
                <span className='btn btn-secondary btn-sm skill'>Jest.io</span>
                <span className='btn btn-secondary btn-sm skill'>Enzyme</span>
            </div>
        </div>
    )
}

function DesignSkills(props) {
    return (
        <div className='p-3'>
            <p>Familiar with:</p>
            <div className='skills-grid'>
                <span className='btn btn-secondary btn-sm skill'>Adobe XD</span>
                <span className='btn btn-secondary btn-sm skill'>Figma</span>
            </div>
        </div>
    )
}