import React, { useLayoutEffect } from "react"
import { useState } from "react"
import Header from "../components/Header"
import { Button, Container } from "../styles/GlobalStyles"
import {
  ParticipantsCount,
  SubTitle,
  TextBox,
  Title,
  TitleImg,
} from "../styles/MainPageStyles"
import QuestionPage from "./QuestionPage"
// import { database } from "../firebase-config"
// import { ref, onValue } from "firebase/database"
import { motion } from "framer-motion"

const MainPage = () => {
  const [participants, setParticipants] = useState(0)

  // useLayoutEffect(() => {
  //   const participantsRef = ref(database, "participants")
  //   onValue(participantsRef, (snapshot) => {
  //     const data = snapshot.val()
  //     setParticipants(data ? data.count : 0)
  //   })
  // }, [])

  const [testMode, setTestMode] = useState(false)

  const testStart = () => {
    setTestMode(true)
  }

  return (
    <Container>
      <Header />
      {!testMode ? (
        <>
          <TextBox
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <TitleImg
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <Title
              as={motion.div}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div>나와 어울리는</div>
              <div>코딩 언어는 무엇일까요?</div>
            </Title>
            <SubTitle
              as={motion.div}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              SVP 1조와 함께하는 나만의 코딩 언어 찾기!
            </SubTitle>
            <SubTitle
              as={motion.div}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              자신의 스타일에 맞는 코딩 언어를 알려드릴게요:)
            </SubTitle>
          </TextBox>
          <Button
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            onClick={testStart}
          >
            <div>테스트 시작하기!</div>
          </Button>
        </>
      ) : (
        <QuestionPage participants={participants} />
      )}
    </Container>
  )
}

export default MainPage
