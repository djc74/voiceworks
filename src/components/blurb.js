import React from "react"
import styled from "styled-components"

const BlurbHolder = styled.section`
  color: #fffafd;
  font-size: 2.4vw;
  font-weight: 100;
  padding: 5vh 0 10vh;
  @media (max-width: 600px) {
    font-size: 3vw;
  }
`

const Blurb = () => (
  <BlurbHolder>
    What we are and what we do Lorem ipsum dolor amet banjo ugh echo park
    readymade tousled vaporware flexitarian pitchfork keffiyeh lyft Lorem ipsum
    dolor amet food truck williamsburg meditation twee mumblecore affogato
    intelligentsia chambray portland retro gochujang. Chicharrones meggings
    tofu, art party
  </BlurbHolder>
)

export default Blurb
