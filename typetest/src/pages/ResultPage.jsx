import React from "react"
import { useLocation } from "react-router-dom"

const ResultPage = () => {
  const location = useLocation() // 현재 위치 정보(결과 값 확인)

  // 상태가 없는 경우를 대비하여 빈 객체({})를 기본값으로 설정(향후 테스트 메인페이지로 다시 전환)
  const { types } = location.state || {}

  // 유형 정의 함수
  const defineType = (types) => {
    if (!types) return ""

    // 각 짝별로 더 높은 숫자를 가진 유형을 결정
    const mbti = [
      types.E > types.I ? "E" : "I",
      types.S > types.N ? "S" : "N",
      types.F > types.T ? "F" : "T",
      types.P > types.J ? "P" : "J",
    ].join("")

    return mbti
  }

  const typeResult = defineType(types)

  return (
    <div>
      <h1>ResultPage</h1>
      <p>{typeResult}</p>
    </div>
  )
}

export default ResultPage
