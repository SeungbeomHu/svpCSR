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
import Share from "../components/Share"

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

    const mbti = [
      types.E > types.I ? "E" : "I",
      types.S > types.N ? "S" : "N",
      types.F > types.T ? "F" : "T",
      types.P > types.J ? "P" : "J",
    ].join("")

    return mbti
  }

  // 유형 결과(함수 실행)
  const typeResult = defineType(types)

  // typeResult가 유효하지 않거나 typesData에 존재하지 않는 경우를 대비한 체크
  const resultData = typesData[typeResult]
  const imageUrl = resultData?.imageUrl || ""
  const typeName = resultData?.name || ""
  const typeNameText = resultData?.name_text || ""
  const description = resultData?.description || ""
  const matchType = resultData?.match || ""

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
        <MatchTypeContainerTitle>함께하면 좋은 조합</MatchTypeContainerTitle>
        <MatchTypeContainer>
          <MatchTypeItem>
            <MatchTypeItemImg src={typesData[matchType[0]].imageUrl} alt="" />
            <MatchTypeItemText>
              {typesData[matchType[0]].name}
            </MatchTypeItemText>
          </MatchTypeItem>

          <MatchTypeItem>
            <MatchTypeItemImg src={typesData[matchType[1]].imageUrl} alt="" />
            <MatchTypeItemText>
              {typesData[matchType[1]].name}
            </MatchTypeItemText>
          </MatchTypeItem>
        </MatchTypeContainer>
      </DescriptionContainer>

      <ShareTitle>친구에게 테스트 공유하기!</ShareTitle>
      <Share />
      <Button
        onClick={() => {
          navigate("/")
        }}
      >
        테스트 다시하기
      </Button>
      <Instargram />
      <Space></Space>
    </ResultPageContainer>
  )
}

export default ResultPage
