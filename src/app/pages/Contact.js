// Contact.js
import React from 'react'
import styled from 'styled-components'

// Import AwesomeIcon
import AwesomeIcon from './../components/AwesomeIcon'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Text } from './../components/Typography'

const ContactLink = styled(Link)`
  margin-bottom: 32px;
  display: inline-block;
  font-size: 16px;
  color: white;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const SocialMediaList = styled.ul`
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    list-style-type: none;

    &:not(:last-child) {
      margin-right: 16px;
    }
  }


  a {
    font-size: 18px;

    @media (min-width: 480px) {
      font-size: 24px;
    }
  }
`

export default class Contact extends React.Component {
    render () {
        return (
            <Section centered>
                <Container>
                    <Heading>Say hello</Heading>

                    <Text>
                        Hello, I am a young software engineer living in the wonderful city of Cleveland. I'm making this as a side project to learn react.
                    </Text>
                    <ContactLink href="mailto:dclifford14@gmail.com">dclifford14@gmail.com</ContactLink>

                    <Text>Follow me on the web:</Text>

                    <SocialMediaList>

                        <li>
                            <Link href="https://www.linkedin.com/in/david-clifford-83130035/">
                                <AwesomeIcon icon="linkedin" />
                            </Link>
                        </li>

                        <li>
                            <Link href="https://github.com/davcliff">
                                <AwesomeIcon icon="github" />
                            </Link>
                        </li>
                    </SocialMediaList>
                </Container>
            </Section>
        )
    }
}