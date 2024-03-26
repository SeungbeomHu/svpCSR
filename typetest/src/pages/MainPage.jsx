import React from "react"
import { useState } from "react"
import { Button, Container } from "../styles/GlobalStyles"
import { CoverImg, SubTitle, TextBox, Title } from "../styles/MainPageStyles"
import QuestionPage from "./QuestionPage"
// import Footer from "../components/Footer"

const MainPage = () => {
  const imgURL = "/images/thumbnail.jpg"
  // 테스트 시작 여부
  const [testMode, setTestMode] = useState(false)

  // 테스트 시작 함수
  const testStart = () => {
    setTestMode(true) // 질문 페이지로 이동
  }

  return (
    <Container>
      {/* <Footer /> */}
      {!testMode ? (
        <>
          <TextBox>
            <Title>당신은 어떤 커피인가요?</Title>
            <SubTitle>스타일에 맞는 커피를 알려드릴게요!</SubTitle>
          </TextBox>

          <CoverImg $image={imgURL} />
          <Button onClick={testStart}>테스트 시작하기!</Button>
        </>
      ) : (
        <QuestionPage />
      )}
    </Container>
  )
}

export default MainPage
