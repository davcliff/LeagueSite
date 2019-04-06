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

var memberData = require('../../data/MemberData.json');

export default class Members extends React.Component {
    render () {
        const members = memberData[0].active.map((member) =>
            <li key={member.id}>
                <MemberItem>
                    <MemberItemThumbnail
                        alt={member.nickName}
                        src={member.image}
                        srcSet={member.image} />
                    <text>{member.nickName}</text><br/>
                    <text>{member.lifetimeRecord}</text>
                </MemberItem>
            </li>
        );
        const retired = memberData[0].retired.map((retired) =>
            <li key={retired.id}>
                <MemberItem>
                    <MemberItemThumbnail
                        alt={retired.nickName}
                        src={retired.image}
                        srcSet={retired.image}  />
                    <text>{retired.nickName}</text><br/>
                    <text>{retired.lifetimeRecord}</text>
                </MemberItem>
            </li>
        );
        return (
            <MemberWrapper>
                <Container>
                    <MemberGrid>
                        <div>
                            <h1>Active Members</h1>
                            <ul>
                                {members}
                            </ul>
                            <br/>
                            <h1>Retired Members</h1>
                            <ul>
                                {retired}
                            </ul>
                        </div>
                    </MemberGrid>
                </Container>
            </MemberWrapper>
        )
    }
}