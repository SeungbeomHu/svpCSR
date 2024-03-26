import React from "react"
import { useState } from "react"
import Footer from "../components/Footer"
import Instargram from "../components/Instargram"
import { Button, Container } from "../styles/GlobalStyles"
import { SubTitle, TextBox, Title } from "../styles/MainPageStyles"
import QuestionPage from "./QuestionPage"

const MainPage = () => {
  // 테스트 시작 여부
  const [testMode, setTestMode] = useState(false)

  // 테스트 시작 함수
  const testStart = () => {
    setTestMode(true) // 질문 페이지로 이동
  }

  return (
    <Container>
      <Footer />
      {!testMode ? (
        <>
          <TextBox>
            <Title>당신은 어떤 커피일까요?</Title>
            <SubTitle>그래서커피와 함께하는 커피 유형테스트!</SubTitle>
            <SubTitle>스타일에 맞는 커피를 알려드릴게요 :)</SubTitle>
          </TextBox>
          <Button onClick={testStart}>테스트 시작하기!</Button>
          <Instargram />
        </>
      ) : (
        <QuestionPage />
      )}
    </Container>
  )
}

export default MainPage
