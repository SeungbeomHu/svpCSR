import React from "react"
import {
  InstagramLogo,
  LogoContainer,
  LogoDescription,
} from "../styles/MainPageStyles"
import { TiArrowLeftOutline } from "react-icons/ti"

const Instargram = () => {
  const cafeURL = "https://www.instagram.com/graeseocoffee/"
  return (
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
        <TiArrowLeftOutline />

        <span>카페 구경하기!</span>
      </LogoDescription>
    </LogoContainer>
  )
}

export default Instargram
