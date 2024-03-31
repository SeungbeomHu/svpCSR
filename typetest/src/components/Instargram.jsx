import React from "react"
import {
  InstagramLogo,
  LogoContainer,
  LogoDescription,
} from "../styles/MainPageStyles"
import { Button } from "../styles/GlobalStyles"

const Instargram = ({ animate }) => {
  const cafeURL = "https://www.instagram.com/graeseocoffee/"

  return (
    <Button>
      <LogoContainer
        onClick={() => {
          window.open(cafeURL)
        }}
      >
        <InstagramLogo
          onClick={() => {
            window.open(cafeURL)
          }}
        />
        <LogoDescription
          onClick={() => {
            window.open(cafeURL)
          }}
        >
          <span>카페 구경하기!</span>
        </LogoDescription>
      </LogoContainer>
    </Button>
  )
}

export default Instargram
