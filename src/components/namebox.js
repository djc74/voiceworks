import React from "react"
import styled from "styled-components"

import chevron from "../icons/chevron.svg"
import suze from "../images/suze-no-bg.png"

const BoxesHolder = styled.section`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5rem;
`

const BoxWrapper = styled.article`
  background: #f72f97;
  color: #fffafd;
  padding: 2%;
  /* width: 40%; */
`

const Name = styled.h1`
  font-size: 5vw;
  font-weight: 100;
  margin-bottom: 1rem;
  max-width: 60%;
`

const AboutWrapper = styled.div`
  display: flex;
`

const AboutMe = styled.p`
  font-weight: 700;
  margin-left: 0.5rem;
`

const AboutChevron = styled.img`
  height: 1rem;
  width: 1rem;
`

const Headshot = styled.img`
  height: 5rem;
  position: relative;
  top: 0;
  right: 0;
`

const NameBoxes = () => (
  <BoxesHolder>
    <BoxWrapper>
      <Name>Suze Cooper</Name>
      <AboutWrapper>
        <AboutChevron src={chevron} alt="chevron" />
        <AboutMe>ABOUT ME</AboutMe>
      </AboutWrapper>
      <Headshot src={suze} alt="suze headshot" />
    </BoxWrapper>
    <BoxWrapper>
      <Name>Peter Stewart</Name>
      <AboutWrapper>
        <AboutChevron src={chevron} alt="chevron" />
        <AboutMe>ABOUT ME</AboutMe>
      </AboutWrapper>
    </BoxWrapper>
  </BoxesHolder>
)

export default NameBoxes
