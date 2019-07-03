import React from "react"
import styled from "styled-components"

import chevron from "../icons/chevron.svg"
import twitter from "../icons/twitter-logo.svg"
import linkedin from "../icons/linkedin-logo.svg"
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

const BackgroundBoxSuze = styled.div`
  background: linear-gradient(180deg, #f72f97 10%, #161616 70%);
  display: ${props => (props.suzeshow ? "flex" : "none")};
`

const BackgroundBoxPeter = styled(BackgroundBoxSuze)`
  display: ${props => (props.petershow ? "flex" : "none")};
`

const ExpandedBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`

const BoxWrapper = styled.article`
  background: #f72f97;
  color: #fffafd;
  display: flex;
  flex-direction: column;
  padding: 4%;
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

const AboutWrapper = styled.button`
  align-items: center;
  display: flex;
  border: none;
  color: inherit;
  padding: 0;
  background: none;
`

const RightAboutWrapper = styled(AboutWrapper)`
  align-self: flex-end;
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

const BioHolder = styled.div`
  background: #fffafd;
  margin: 0 auto;
  padding: 1rem;
  width: 95%;
`

const Bio = styled.p`
  color: #161616;
`

const LogoWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`

const Logo = styled.img`
  height: 2rem;
  margin-right: 1rem;
`

class NameBoxes extends React.Component {
  state = {
    dropdownVisible: false,
    dropdownVisibleRight: false,
  }

  toggleDropdown = () =>
    this.setState(state => ({ dropdownVisible: !state.dropdownVisible }))
  toggleRightDropdown = () =>
    this.setState(state => ({
      dropdownVisibleRight: !state.dropdownVisibleRight,
    }))

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
            <RightAboutWrapper onClick={this.toggleDropdown}>
              <AboutChevron src={chevron} alt="chevron" />
              <AboutMe>ABOUT ME</AboutMe>
            </RightAboutWrapper>
            <LeftHeadshot src={suze} alt="suze headshot" />
          </BoxWrapper>
          <BackgroundBoxSuze suzeshow={this.state.dropdownVisible}>
            <BioHolder>
              <Bio>
                SUZE COOPER has more than 15 years of journalism experience
                across print and radio. Trained by Trinity Mirror, she has
                worked in newsrooms around Kent producing front page stories and
                reading live breaking news on commercial radio station kmfm. Now
                a director of her own company Big Tent Media, she works
                alongside her husband to support small businesses in telling
                their stories online through the creation of websites and via
                social media. A self-confessed techy geek, she is fascinated by
                the possibilities of voice technology for story-telling. Suze is
                the creator of two Alexa Flash Briefings; an audible social
                calendar for content creators called Social Days and a what's on
                guide, What's On Medway - the listings you can listen to. She is
                a confident public speaker, eager to inspire and educate others
                about the possibilities of voice technology.
              </Bio>
              <LogoWrapper>
                <a href="https://twitter.com/BigTentSocial?lang=en-gb">
                  <Logo src={twitter} alt="Twitter logo" />
                </a>
                <a href="https://www.linkedin.com/in/suzecooper/">
                  <Logo src={linkedin} alt="LinkedIn logo" />
                </a>
              </LogoWrapper>
            </BioHolder>
          </BackgroundBoxSuze>
        </ExpandedBoxWrapper>
        <ExpandedBoxWrapper>
          <BoxWrapper>
            <Name>
              Peter
              <br />
              Stewart
            </Name>
            <AboutWrapper onClick={this.toggleRightDropdown}>
              <AboutChevron src={chevron} alt="chevron" />
              <AboutMe>ABOUT ME</AboutMe>
            </AboutWrapper>
            <Headshot src={peter} alt="peter headshot" />
          </BoxWrapper>
          <BackgroundBoxPeter petershow={this.state.dropdownVisibleRight}>
            <BioHolder>
              <Bio>
                PETER STEWART has been broadcasting for thirty years in the UK,
                both in radio and TV, and for commercial and BBC stations. He’s
                written seven published books on presentation and production
                skills, has spoken at events in London, New York and Prague, and
                trained staff from international opera houses to Oxfam
                field-workers. In 2019, Peter was an advisor for the Reuters
                Institute / Oxford University The Future of Voice and the
                Implications for News report, and subsequently spoke about Voice
                at the NewsRewired conference at Reuters in London. As well as
                hosting a podcast discussing developments on the Voice platform,
                Peter has several daily Flash Briefings on Amazon Alexa devices:
                a regional events’ guide (which is the second highest-rated
                Skill in the UK), another discussing case studies on how Voice
                tech is being used, and a third which is a step-by-step guide on
                how to produce a Flash Briefing.
              </Bio>
              <LogoWrapper>
                <a href="https://twitter.com/BigTentSocial?lang=en-gb">
                  <Logo src={twitter} alt="Twitter logo" />
                </a>
                <a href="https://www.linkedin.com/in/peter-stewart-uk/">
                  <Logo src={linkedin} alt="LinkedIn logo" />
                </a>
              </LogoWrapper>
            </BioHolder>
          </BackgroundBoxPeter>
        </ExpandedBoxWrapper>
      </BoxesHolder>
    )
  }
}

export default NameBoxes
