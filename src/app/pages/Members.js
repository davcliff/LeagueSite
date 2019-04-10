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
        const baseImgUrl = "../../../img/";
        const members = memberData[0].active.map((member) => {
            return (
                <MemberItem
                    key={member.id}
                    name={member.name}
                    nickName={member.nickName}
                    record={member.lifetimeRecord}
                    bio={member.bio}
                    notablePlayers={member.notablePlayers}
                    image={baseImgUrl + member.image}
                />
            );
        });
        const retired = memberData[0].retired.map((retired) =>
            <MemberItem key={retired.id}>
                <img
                    alt={retired.nickName}
                    src={require(`${baseImgUrl}${retired.image}`)}/>
                {retired.nickName}<br/>
                {retired.lifetimeRecord}<br/>
            </MemberItem>
        );
        const memberItem = member => (
          <div>
              <p>{</p>
          </div>
        );
        return (
            <MemberWrapper>
                <Container>
                    <Heading>The Degenerates</Heading>
                    <MemberGrid>
                        <div>
                            <Subheading>Active Members</Subheading>
                            <div>
                                <img
                            </div>
                                {members}
                            <br/>
                            <Subheading>Retired Members</Subheading>
                                {retired}
                        </div>
                    </MemberGrid>
                </Container>
            </MemberWrapper>
        )
    }
}