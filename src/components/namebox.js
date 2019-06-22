import React from "react"
import styled from "styled-components"

import chevron from "../icons/chevron.svg"
import suze from "../images/suze-no-bg.png"
import peter from "../images/peter-no-bg.png"

const BoxesHolder = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5vh 0 10vh;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

const BoxWrapper = styled.article`
  background: #f72f97;
  color: #fffafd;
  min-width: 48%;
  padding: 2%;
  position: relative;
  @media (max-width: 600px) {
    min-width: 50vw;
    :first-of-type {
      margin-bottom: 5vh;
    }
  }
`

const Name = styled.h1`
  font-size: 5vw;
  font-weight: 100;
  margin-bottom: 5%;
  @media (max-width: 600px) {
    font-size: 8vw;
  }
`

const RightName = styled(Name)`
  text-align: right;
`

const AboutWrapper = styled.div`
  align-items: center;
  display: flex;
`

const RightAboutWrapper = styled(AboutWrapper)`
  justify-content: flex-end;
`

const AboutMe = styled.p`
  font-size: 1.5vw;
  font-weight: 700;
  margin-left: 0.5rem;
  @media (max-width: 600px) {
    font-size: 3vw;
  }
`

const AboutChevron = styled.img`
  height: 1rem;
  width: 1rem;
`

const Headshot = styled.img`
  height: 100%;
  object-fit: cover;
  position: absolute;
  right: 0;
  top: 0;
  max-width: 50%;
`

const LeftHeadshot = styled(Headshot)`
  left: 0;
`

const NameBoxes = () => (
  <BoxesHolder>
    <BoxWrapper>
      <RightName>
        Suze
        <br />
        Cooper
      </RightName>
      <RightAboutWrapper>
        <AboutChevron src={chevron} alt="chevron" />
        <AboutMe>ABOUT ME</AboutMe>
      </RightAboutWrapper>
      <LeftHeadshot src={suze} alt="suze headshot" />
    </BoxWrapper>
    <BoxWrapper>
      <Name>
        Peter
        <br />
        Stewart
      </Name>
      <AboutWrapper>
        <AboutChevron src={chevron} alt="chevron" />
        <AboutMe>ABOUT ME</AboutMe>
      </AboutWrapper>
      <Headshot src={peter} alt="peter headshot" />
    </BoxWrapper>
  </BoxesHolder>
)

export default NameBoxes
