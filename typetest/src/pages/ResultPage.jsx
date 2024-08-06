import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../styles/GlobalStyles"
import results from "../data/results"
import {
  ImgBox,
  ResultPageContainer,
  ShareTitle,
  Title,
  TypeName,
  SubTitle,
  Line,
  DescriptionContainer,
  Description,
  MatchTypeContainer,
  MatchTypeItem,
  MatchTypeItemImg,
  MatchTypeItemText,
  MatchTypeContainerTitle,
} from "../styles/ResultPageStyles"
import { Space } from "../styles/QuestionPageStyles"
import Instargram from "../components/Instargram"

const ResultPage = () => {
  const navigate = useNavigate()
  const location = useLocation() // 현재 위치 정보(결과 값 확인)

  // 유형 및 설명 데이터
  const typesData = results

  // 상태가 없는 경우를 대비하여 빈 객체({})를 기본값으로 설정(향후 테스트 메인페이지로 다시 전환)
  const { types } = location.state || {}

  useEffect(() => {
    // types가 존재하지 않거나, types 객체가 비어있는 경우 메인 페이지로 리디렉션
    if (types === undefined) {
      navigate("/")
    }
  }, [navigate, types]) // 의존성 배열에 navigate와 types를 추가

  // 유형 정의 함수
  const defineType = (types) => {
    if (!types) return ""


    console.log(types)


    const res = types.C > types.P ? "C" : types.P > types.J ? "P" : types.J > types.R? "J" : "R"



    return res
  }

  // 유형 결과(함수 실행)
  const typeResult = defineType(types)

  // typeResult가 유효하지 않거나 typesData에 존재하지 않는 경우를 대비한 체크
  const resultData = typesData[typeResult]
  const imageUrl = resultData?.imageUrl || ""
  const typeName = resultData?.name || ""
  const typeNameText = resultData?.name_text || ""
  const description = resultData?.description || []
  const matchType = resultData?.match || ""
  const matchFirstTypeName = typesData[matchType[0]]?.name || ""
  const matchSecondTypeName = typesData[matchType[1]]?.name || ""
  const matchFirstTypeImg = typesData[matchType[0]]?.imageUrl || ""
  const matchSecondTypeImg = typesData[matchType[1]]?.imageUrl || ""

  return (
    <ResultPageContainer>
      <DescriptionContainer>
        <ImgBox $image={imageUrl} />
        <Title>
          <SubTitle>당신은 {typeNameText}</SubTitle>
          <TypeName>{typeName}</TypeName>
        </Title>
        <Line></Line>
        <Description>
          {description.map((desc, index) => (
            <p key={index}>- {desc}</p>
          ))}
        </Description>
        <Line></Line>

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
