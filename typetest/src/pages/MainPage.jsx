import React from "react"
import { useState } from "react"
import { Button, Container } from "../styles/GlobalStyles"
import { Title } from "../styles/MainPageStyles"
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
      {!testMode ? (
        <>
          <Title>내 직장 상사의 유형은?</Title>
          <Button onClick={testStart}>
            <p>테스트 시작하기</p>
          </Button>
        </>
      ) : (
        <QuestionPage />
      )}
    </Container>
  )
}

export default MainPage
