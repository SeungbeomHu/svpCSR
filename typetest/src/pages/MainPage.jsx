import React from "react"
import { useState } from "react"
import { Button, Container } from "../styles/GlobalStyles"
import { Title } from "../styles/MainPageStyles"
import QuestionPage from "./QuestionPage"

const MainPage = () => {
  // 테스트 시작 여부
  const [testMode, setTestMode] = useState(false)

  const testStart = () => {
    setTestMode(true)
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
