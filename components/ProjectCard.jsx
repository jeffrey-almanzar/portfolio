import { Heading, Text, Button, Stack, UnorderedList, ListItem } from '@chakra-ui/react';

export default function ProjectCard(props) {
    const {
        title,
        url,
        leadText,
        features,
        skills,
    } = props;

    return (
        <div id="pro-0" className="projects p-4">
            <div className="project-title">
                <a href={url} target="_blank">
                    <Heading as="h3" size='md'>{title}</Heading>
                </a>
            </div>
            <div className="project-description mt-2">
                <Text mb={3} fontSize="lg">
                    {leadText}
                </Text>
                <p className="main-features mb-2">Main features</p>
                <UnorderedList>
                    {features.map(feature => <ListItem>{feature}</ListItem>)}
                </UnorderedList>
            </div>
            <div className="project-content group">
                <div className="d-flex project-skils">
                    <div className="pro-tools-container">
                        <p>
                            {skills.map(skill => <span className="btn btn-sm btn-light">{skill}</span> )}
                        </p>
                    </div>
                </div>
            </div>
            <Button mt={2} colorScheme='brand' as='a' href={url} target='_blank'>Preview</Button>
        </div>
    )
}