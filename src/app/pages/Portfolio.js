// Portfolio.js
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

const MemberWrapper = styled(Section)`
  padding-top: 120px;
  padding-bottom: 80px;
  background-color: #7A8F98;
`
const MemberGrid = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
`

const MemberItem = styled.a`
  display: block;
  cursor: pointer;
  width: 100%;
  transition: opacity .25s ease-in-out;

  &:focus,
  &:hover {
    opacity: .5;
  }

  @media (max-width: 767px) {
    &:nth-child(n+2) {
      margin-top: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: calc(50% - 32px);

    &:nth-child(odd) {
      margin-right: 32px;
    }

    &:nth-child(even) {
      margin-left: 32px;
    }

    &:nth-child(n+3) {
      margin-top: 48px;
    }
  }

  @media (min-width: 992px) {
    width: calc(33.33333% - 32px);

    &:first-child,
    &:nth-child(4),
    &:nth-child(7) {
      margin-right: 32px;
    }

    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(8), {
      margin-left: 16px;
      margin-right: 16px;
    }

    &:nth-child(3),
    &:nth-child(6),
    &:last-child {
      margin-left: 32px;
    }

    &:nth-child(n+4) {
      margin-top: 24px;
    }
  }
`

const MemberItemThumbnail = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;
`

export default class Portfolio extends React.Component {
    render () {
        return (
            <MemberWrapper>
                <Container>
                    <Subheading>League Members</Subheading>

                    <Heading>Active</Heading>

                    <Text>Current members of this shitty league.</Text>

                    <MemberGrid>
                        <MemberItem href="https://www.costco.com">
                            <MemberItemThumbnail src="https://svenhards.com/wp-content/uploads/2017/08/costco-wholesale-logo.png"
                                                    srcSet="https://svenhards.com/wp-content/uploads/2017/08/costco-wholesale-logo.png 1x,
                                                            https://svenhards.com/wp-content/uploads/2017/08/costco-wholesale-logo.png 2x"
                                                    alt="Costco" />
                        </MemberItem>

                    </MemberGrid>

                    <Text>Let's get in touch:</Text>

                    <Link href="mailto:dclifford14@gmail.com">dclifford14@gmail.com</Link>
                </Container>
            </MemberWrapper>
        )
    }
}