import styled from "styled-components"

export const QuestionNumber = styled.div`
  font-size: 40px;
  font-weight: bolder;
`

export const Question = styled.p`
  width: 80%;
  font-size: 25px;
  text-align: center;
  font-weight: bolder;
  padding: 20px;
  margin-bottom: 50px;
`
export const AnswerBox = styled.div`
  width: 80%;
  text-align: center;
  justify-content: center;
  margin: 5px;
  padding: 20px 15px;
  border-radius: 10px;
  border: 2px solid transparent;
  background-color: blueviolet;
  color: white;
  font-size: 20px;
  cursor: pointer; /* 마우스 오버 시 커서 모양 변경 */
  transition: all 0.3s ease-in-out; /* 상태 변화 애니메이션 */

  &:hover {
    background-color: #3399ff; /* 호버 시 배경색 변경 */
  }
`
