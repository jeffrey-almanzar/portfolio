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
                            I'm a senior Software Engineer with 5+ years of experience specialized in full-stack JavaScript development.
                        </Text>
                        <div>
                            <Button colorScheme='brand' as='a' href="mailto:almanzarortizjeffrey@gmail.com" me={2}>Reach out</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;