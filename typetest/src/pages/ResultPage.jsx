import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../styles/GlobalStyles"
import results from "../data/results"
import {
  ImgBox,
  ResultPageContainer,
  ShareBox,
  ShareCircle,
  ShareTitle,
  Title,
  TypeName,
  SubTitle,
  Line,
  DescriptionContainer,
  Description,
} from "../styles/ResultPageStyles"
import { Space } from "../styles/QuestionPageStyles"

const ResultPage = () => {
  const navigate = useNavigate()
  const location = useLocation() // 현재 위치 정보(결과 값 확인)

  // 유형 및 설명 데이터
  const typesData = results

  // 상태가 없는 경우를 대비하여 빈 객체({})를 기본값으로 설정(향후 테스트 메인페이지로 다시 전환)
  const { types } = location.state || {}

  // 유형 정의 함수
  const defineType = (types) => {
    // if (!types) return ""

    // 각 짝별로 더 높은 숫자를 가진 유형을 결정
    // const mbti = [
    //   types.E > types.I ? "   E" : "I",
    //   types.S > types.N ? "S" : "N",
    //   types.F > types.T ? "F" : "T",
    //   types.P > types.J ? "P" : "J",
    // ].join("")

    // return mbti

    if (!types || Object.keys(types).length === 0) return ""

    // 객체의 키-값 쌍에서 가장 높은 값을 가진 키를 찾습니다.
    let highestType = Object.keys(types).reduce((a, b) =>
      types[a] > types[b] ? a : b
    )

    return highestType // 가장 높은 카운트를 가진 메뉴 유형 반환
  }

  // 유형 결과(함수 실행)
  const typeResult = defineType(types)

  // 결과 공유
  // const resultShare = () => {
  //   // SNS 결과 공유 로직 생성 필요
  //   console.log("결과 공유")
  // }

  return (
    <ResultPageContainer>
      <ImgBox $image={typesData[typeResult].imageUrl} />
      <DescriptionContainer>
        <Title>
          <SubTitle>당신은</SubTitle>
          <TypeName>{typesData[typeResult].name}</TypeName>
          <Line></Line>
        </Title>

        <Description>{typesData[typeResult].description}</Description>
        <ShareTitle>친구에게 테스트 공유하기!</ShareTitle>
        <ShareBox>
          <ShareCircle>c</ShareCircle>
          <ShareCircle>c</ShareCircle>
          <ShareCircle>c</ShareCircle>
        </ShareBox>
      </DescriptionContainer>
      <Button
        onClick={() => {
          navigate("/")
        }}
      >
        테스트 다시하기
      </Button>
      <Space></Space>
    </ResultPageContainer>
  )
}

export default ResultPage
