import React from "react"
import styled from "styled-components"

import SuzeBio from "./suzebio"
import PeterBio from "./peterbio"

import chevron from "../icons/chevron.svg"
import suze from "../images/suze-no-bg.png"
import peter from "../images/peter-no-bg.png"

const BoxesHolder = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 10vh 0;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

const BackgroundBoxSuze = styled.div`
  background: linear-gradient(180deg, #f72f97 10%, #161616 70%);
  display: flex;
  max-height: ${props => (props.suzeshow ? "1000px" : "0")};
  transition: all 1s ease-in-out;
`

const BackgroundBoxPeter = styled(BackgroundBoxSuze)`
  max-height: ${props => (props.petershow ? "1000px" : "0")};
  transition: all 1s ease-in-out;
`

const ExpandedBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  @media (max-width: 600px) {
    width: 100%;
    :first-of-type {
      margin-bottom: 5vh;
    }
  }
`

const BoxWrapper = styled.article`
  background: #f72f97;
  color: #fffafd;
  display: flex;
  flex-direction: column;
  padding: 4%;
  position: relative;
`

const Name = styled.h1`
  font-size: 5vw;
  font-weight: 100;
  margin-bottom: 5%;
  @media (max-width: 600px) {
    font-size: 9vw;
  }
`

const RightName = styled(Name)`
  text-align: right;
`

const AboutWrapper = styled.button`
  align-items: center;
  align-self: flex-start;
  display: flex;
  border: none;
  color: inherit;
  padding: none;
  background: none;
  outline: none;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    border: 1px solid #fffafd;
    border-radius: 50px;
    padding: 4px;
    padding-right: 8px;
  }
`

const RightAboutWrapper = styled(AboutWrapper)`
  align-self: flex-end;
`

const AboutMe = styled.p`
  font-size: 1.5vw;
  font-weight: 700;
  margin-left: 0.5rem;
  @media (max-width: 600px) {
    font-size: 3.3vw;
  }
`

const AboutChevron = styled.img`
  height: 1rem;
  width: 1rem;
  transform: ${props =>
    props.suzeshow || props.petershow ? "rotate(90deg)" : "none"};
  transition: all 0.8s ease-in-out;
`

const Headshot = styled.img`
  height: 100%;
  object-fit: cover;
  position: absolute;
  right: 3%;
  top: 0;
  max-width: 50%;
`

const LeftHeadshot = styled(Headshot)`
  left: 3%;
`

class NameBoxes extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleRightClick = this.handleRightClick.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    this.handleOutsideRightClick = this.handleOutsideRightClick.bind(this)
    this.state = {
      dropdownVisible: false,
      dropdownVisibleRight: false,
    }
  }

  handleClick() {
    if (!this.state.dropdownVisible) {
      document.addEventListener("click", this.handleOutsideClick, false)
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false)
    }
    this.setState(state => ({ dropdownVisible: !state.dropdownVisible }))
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return
    }
    this.handleClick()
  }

  handleRightClick() {
    if (!this.state.dropdownVisibleRight) {
      document.addEventListener("click", this.handleOutsideRightClick, false)
    } else {
      document.removeEventListener("click", this.handleOutsideRightClick, false)
    }
    this.setState(state => ({
      dropdownVisibleRight: !state.dropdownVisibleRight,
    }))
  }

  handleOutsideRightClick(e) {
    if (this.node.contains(e.target)) {
      return
    }
    this.handleRightClick()
  }

  render() {
    return (
      <BoxesHolder>
        <ExpandedBoxWrapper>
          <BoxWrapper>
            <RightName>
              Suze
              <br />
              Cooper
            </RightName>
            <RightAboutWrapper onClick={this.handleClick}>
              <AboutChevron
                src={chevron}
                alt="chevron"
                suzeshow={this.state.dropdownVisible}
              />
              <AboutMe>ABOUT ME</AboutMe>
            </RightAboutWrapper>
            <LeftHeadshot src={suze} alt="suze headshot" />
          </BoxWrapper>
          <BackgroundBoxSuze
            suzeshow={this.state.dropdownVisible}
            ref={node => {
              this.node = node
            }}
          >
            <SuzeBio />
          </BackgroundBoxSuze>
        </ExpandedBoxWrapper>
        <ExpandedBoxWrapper>
          <BoxWrapper>
            <Name>
              Peter
              <br />
              Stewart
            </Name>
            <AboutWrapper onClick={this.handleRightClick}>
              <AboutChevron
                src={chevron}
                alt="chevron"
                petershow={this.state.dropdownVisibleRight}
              />
              <AboutMe>ABOUT ME</AboutMe>
            </AboutWrapper>
            <Headshot src={peter} alt="peter headshot" />
          </BoxWrapper>
          <BackgroundBoxPeter
            petershow={this.state.dropdownVisibleRight}
            ref={node => {
              this.node = node
            }}
          >
            <PeterBio />
          </BackgroundBoxPeter>
        </ExpandedBoxWrapper>
      </BoxesHolder>
    )
  }
}

export default NameBoxes
