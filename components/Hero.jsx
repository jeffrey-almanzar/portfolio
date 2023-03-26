import { Button, ButtonGroup } from '@chakra-ui/react'

function Hero(props) {
    return (
        <div class="container hero-wrapper">
            <div class="d-flex">
                <div class="col-lg-7">
                    <div class="hero-content">
                        <p>Hi, my name is</p>
                        <h1 id="my-name" class="name"></h1>
                        <p id="hero-description" class="lead mb-5 hero-description">
                            I’m a software engineer that loves implementing user interfaces following design guidelines,
                            and I've
                            been in the web development industry for 3+ years focusing mainly on frontend development in
                            React JS.
                        </p>
                        <div>
                            <Button as='a' href="mailto:almanzarortizjeffrey@gmail.com" me={2}>Contact me</Button>
                            <Button as='a' href="JeffreyA_Resume.pdf" target='_blank' variant='outline'>Resume</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;