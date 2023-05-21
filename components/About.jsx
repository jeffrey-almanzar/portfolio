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
                        Hi, my name is Jeffrey Almanzar, and I’ve been in the web development industry
                        for more than three years. You can see a few of the projects that I've
                        contributed while working at RubensteinTech, <a target="_blank"
                            href="https://www.rubensteintech.com/work/index.html">here</a>.
                    </Text>
                    <Text mb={3}>I learned the basics of programming in college studying computer science. My
                        curiosity led me to discover the web development field, and I learned the basics
                        of HTML, CSS, and JavaScript on my own.
                    </Text>
                    <Text mb={3}>
                        While in college, my web development skills were taken to the next level on an
                        intensive
                        technical bootcamp focused on full stack JavaScript development. This bootcamp
                        helped me
                        get my first software engineering internship at Schoology, which helped me get
                        another two internships at RubensteinTech,
                        where I stayed working full time as software engineer right after completing my
                        degree.
                    </Text>
                    <Text mb={3}>
                        Thanks to the experience gained at Schoology and RubensteinTech, I found out
                        that my
                        most fulfillment task is implementing user interfaces following design
                        guidelines.
                        Therefore, to better understand users and empathize with them, I completed the
                        Google UX
                        Design certificate on June 2022.
                    </Text>
                    <Text mb={3}>
                        To learn more about me, feel free to contact me, <a target="_blank"
                            href="mailto:almanzarortizjeffrey@gmail.com">here</a>.
                    </Text>
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