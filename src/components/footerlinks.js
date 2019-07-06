import React from "react"
import styled from "styled-components"

const LinksHolder = styled.div`
  display: flex;
  justify-content: center;
`

const Svg = styled.svg`
  fill: #ccc;
  margin: 0 1rem;
  transition: all 1s;
  :hover {
    fill: #f72f97;
    transform: scale(1.2);
  }
`

const FooterLinks = () => (
  <LinksHolder>
    <a href="https://www.facebook.com/pages/category/Broadcasting---Media-Production-Company/Voice-Works-376825082933510/">
      <Svg
        width="50"
        height="50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.194 0 0 11.194 0 25s11.194 25 25 25 25-11.194 25-25S38.806 0 25 0zm6.25 16.667h-2.813c-1.12 0-1.354.46-1.354 1.62v2.546h4.167L30.815 25h-3.732v14.583h-6.25V25h-4.166v-4.167h4.166v-4.808c0-3.685 1.94-5.608 6.31-5.608h4.107v6.25z" />
      </Svg>
    </a>
    <a href="https://www.youtube.com/channel/UCZKITZ3VWkhbn2k_POWCWjw">
      <Svg
        width="50"
        height="50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.746 29.027h1.47v7.906h-1.47v-.873a3.3 3.3 0 0 1-.844.736c-.794.454-1.88.444-1.88-1.16v-6.609h1.47v6.06c0 .32.077.534.391.534.288 0 .686-.367.865-.592v-6.002h-.002zm1.337-8.71c.417 0 .648-.334.648-.786V15.67c0-.465-.204-.792-.675-.792-.433 0-.643.335-.643.792v3.862c-.003.438.243.786.67.786zm-4.043 5.898h-5.082v1.556h1.715v9.162h1.656v-9.162h1.71v-1.556zm9.835 4.693v4.386c0 .979-.367 1.737-1.344 1.737-.54 0-.987-.196-1.398-.708v.608H25.65V26.213h1.483v3.45c.334-.405.782-.738 1.309-.738 1.077.002 1.433.91 1.433 1.983zm-1.515.09c0-.267-.05-.469-.156-.608-.179-.236-.508-.26-.764-.13l-.305.242v4.927l.348.28c.24.12.59.128.752-.082.084-.112.128-.294.128-.546v-4.083h-.003zM50 25c0 13.806-11.194 25-25 25S0 38.806 0 25 11.194 0 25 0s25 11.194 25 25zm-22.387-4.69c0 .821.25 1.484 1.08 1.484.467 0 1.113-.244 1.782-1.038v.917h1.544v-8.304h-1.544v6.302c-.188.235-.606.623-.908.623-.332 0-.41-.225-.41-.56v-6.365h-1.544v6.941zm-5.79-4.779v4.071c0 1.465.764 2.225 2.26 2.225 1.244 0 2.22-.831 2.22-2.225v-4.07c0-1.3-.97-2.232-2.22-2.232-1.358 0-2.26.9-2.26 2.231zm-5.752-5.114l2.069 6.69v4.564h1.74v-4.565l2.022-6.69h-1.767l-1.114 4.5-1.198-4.5H16.07zm21.081 21.266c-.027-5.427-.425-7.504-3.85-7.737-3.162-.217-13.448-.215-16.606 0-3.421.233-3.823 2.3-3.85 7.737.027 5.43.425 7.505 3.85 7.74 3.158.215 13.444.215 16.606 0 3.423-.236 3.823-2.3 3.85-7.74zm-1.844-.53v2.012h-2.812v1.491c0 .594.05 1.107.642 1.107.62 0 .656-.417.656-1.107v-.55h1.514v.594c0 1.523-.652 2.446-2.202 2.446-1.408 0-2.123-1.023-2.123-2.446v-3.55c0-1.373.907-2.325 2.232-2.325 1.412.002 2.093.898 2.093 2.327zm-1.512-.015c0-.534-.113-.928-.644-.928-.544 0-.654.384-.654.927v.803h1.298v-.803z" />
      </Svg>
    </a>
    <Svg width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25z" /><path d="M38 21.003V33.2a2.6 2.6 0 0 1-2.6 2.6H14.6a2.6 2.6 0 0 1-2.6-2.6V21.003l12.419 6.21a1.3 1.3 0 0 0 1.163 0L38 21.002z" fill="#161616"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25 24.597l-13-6.5V17.6a2.6 2.6 0 0 1 2.6-2.6h20.8a2.6 2.6 0 0 1 2.6 2.6v.497l-13 6.5z" fill="#161616"/></Svg>
  </LinksHolder>
)

export default FooterLinks
