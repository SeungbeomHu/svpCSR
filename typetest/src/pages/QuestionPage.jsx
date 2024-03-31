import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import Lottie from "react-lottie"
import { useNavigate } from "react-router-dom"
import QuestionItem from "../components/QuestionItem"
import questions from "../data/questions"
import {
  LottieTitle,
  ProgressBar,
  ProgressBarContainer,
  ProgressBarImg,
  ProgressText,
} from "../styles/QuestionPageStyles"
import animationData from "../data/Loading.json"
import { Container } from "../styles/GlobalStyles"
import { database } from "../firebase-config"
import { ref, set } from "firebase/database"

const QuestionPage = ({ participants }) => {
  const navigate = useNavigate()

  // 로딩 상태 추가
  const [loading, setLoading] = useState(false)

  // 질문과 유형 상태
  const [types, setTypes] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    F: 0,
    T: 0,
    J: 0,
    P: 0,
  })
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  // 참여자 수 증가 함수
  const addParticipant = () => {
    const participantsRef = ref(database, "participants")
    set(participantsRef, { count: participants + 1 })
      .then()
      .catch((error) => console.error("참가자 수 업데이트 실패:", error))
  }

  const handleAnswer = (type) => {
    setTypes((prevTypes) => ({
      ...prevTypes,
      [type]: prevTypes[type] + 1,
    }))

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      addParticipant() // 참여자 수 증가
      setLoading(true) // 모든 질문이 완료되면 로딩 상태 활성화
      setTimeout(() => {
        navigate("/result", { state: { types } }) // 결과 페이지로 이동
      }, 3000) // 로딩 화면 표시 시간 조정 가능
    }
  }

  // 프로그래스 바 계산
  const progressPercentage =
    ((currentQuestionIndex + 1) / questions.length) * 100

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  const [dots, setDots] = useState("")

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 온점이 세 개일 때 다시 초기화하고, 그렇지 않으면 온점 추가
      setDots((dots) => (dots.length === 3 ? "" : dots + "."))
    }, 300) // 500ms 마다 온점 업데이트

    // 컴포넌트가 언마운트될 때 인터벌 클리어
    return () => clearInterval(intervalId)
  }, [])

  // 로딩 중이라면 로딩 컴포넌트 표시
  if (loading) {
    return (
      <Container>
        <LottieTitle>유형 분석 중{dots}</LottieTitle>
        <Lottie options={defaultOptions} height={200} width={200} />
      </Container>
    )
  }

  // 로딩 상태가 아니라면 질문 페이지 렌더링
  return (
    <>
      <ProgressBarContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ProgressBarImg width={progressPercentage} />
        <ProgressBar width={progressPercentage} />
        <ProgressText>
          {currentQuestionIndex + 1} / {questions.length}
        </ProgressText>
      </ProgressBarContainer>
      <AnimatePresence mode="wait">
        {questions.length > 0 && currentQuestionIndex < questions.length && (
          <QuestionItem
            key={currentQuestionIndex}
            data={questions[currentQuestionIndex]} // 현재 질문
            currentQuestionNumber={currentQuestionIndex} // 현재 질문 번호
            onAnswer={handleAnswer}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default QuestionPage
