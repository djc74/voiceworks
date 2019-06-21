import React from "react"
import styled from "styled-components"

import chevron from "../icons/chevron.svg"
import suze from "../images/suze-no-bg.png"
import peter from "../images/peter-no-bg.png"

const BoxesHolder = styled.section`
  display: flex;
  justify-content: center;
`

const BoxWrapper = styled.article`
  background: #f72f97;
  color: #fffafd;
  margin: 4vh 1.5vw 10vh;
  padding: 2%;
  position: relative;
  min-width: 40%;
`

const Name = styled.h1`
  font-size: 5vw;
  font-weight: 100;
  margin-bottom: 5%;
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
