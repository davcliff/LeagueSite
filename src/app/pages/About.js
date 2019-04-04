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
import { Heading, Subheading, Text , Paragraph} from './../components/Typography'

export default class About extends React.Component {
    render () {
        return (
            <Section centered>
                <Container>
                    <Subheading>League of Extraordinary Degenerates</Subheading>

                    <Heading>Who are we?</Heading>

                    <Text>
                        We are all alumni of the John Carroll University chapter of Sigma Phi Epsilon.
                        We use this league as a way to sty in touch with those we don't get to see that often.
                    </Text>

                    <Text>Send me anything you think I could add to the site. Email:&nbsp;</Text>

                    <a href="mailto:dclifford14@gmail.com">dclifford14@gmail.com</a>
                </Container>
            </Section>
        )
    }
}