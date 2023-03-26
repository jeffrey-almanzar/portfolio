import { Heading, Button, ButtonGroup, Text } from '@chakra-ui/react';

function Hero(props) {
    return (
        <div className="container hero-wrapper">
            <div className="d-flex">
                <div className="col-lg-7">
                    <div className="hero-content">
                        <p>Hi, my name is</p>
                        <Heading mt={2} id="my-name" className="name"></Heading>
                        <Text fontSize='xl' className="mb-5 hero-description">
                            I’m a software engineer that loves implementing user interfaces following design guidelines,
                            and I've
                            been in the web development industry for 3+ years focusing mainly on frontend development in
                            React JS.
                        </Text>
                        <div>
                            <Button colorScheme='brand' as='a' href="mailto:almanzarortizjeffrey@gmail.com" me={2}>Contact me</Button>
                            <Button colorScheme='brand' as='a' href="JeffreyA_Resume.pdf" target='_blank' variant='outline'>Resume</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;