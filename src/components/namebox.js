import React from "react"
import styled from "styled-components"

const BoxesHolder = styled.section`
  display: flex;
  justify-content: space-between;
`

const BoxWrapper = styled.article`
  background: #f72f97;
  color: #fffafd;
  height: 200px;
  width: 45%;
`

const NameBoxes = () => (
  <BoxesHolder>
    <BoxWrapper>
      <h1>Suze Cooper</h1>
    </BoxWrapper>
    <BoxWrapper>
      <h1>Peter Stewart</h1>
    </BoxWrapper>
  </BoxesHolder>
)

export default NameBoxes
