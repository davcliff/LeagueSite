// About.js
import React from 'react'
import styled from 'styled-components'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Subheading, Text } from './../components/Typography'

export default class About extends React.Component {
    render () {
        return (
            <Section centered>
                <Container>
                    <Subheading>David Clifford</Subheading>

                    <Heading>About Me</Heading>

                    <Text>Text</Text>

                    <Text>Email:&nbsp;</Text>

                    <a href="mailto:dclifford14@gmail.com">dclifford14@gmail.com</a>
                </Container>
            </Section>
        )
    }
}