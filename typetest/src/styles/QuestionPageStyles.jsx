import { motion } from "framer-motion"
import styled from "styled-components"

export const QuestionItemContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 50%;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const QuestionNumber = styled.div`
  font-size: 30px;
  font-weight: bold;
`

export const Question = styled.p`
  width: 80%;
  font-size: 17px;
  text-align: center;
  padding: 20px;
`
export const AnswerBox = styled.div`
  width: 60%;
  text-align: center;
  margin: 10px 0px;
  padding: 15px 10px;
  border-radius: 30px;
  border: 2px solid transparent;
  background-color: orange;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`

export const ProgressBarContainer = styled.div`
  width: 65%;
  background-color: #e0e0e0;
  border-radius: 20px;
  margin: 30px 0;
  position: relative;
`

export const ProgressBar = styled.div`
  height: 20px;
  background-color: #ff9800;
  border-radius: 20px;
  width: ${(props) => props.width}%;
  transition: width 0.5s ease-in-out;
`

export const ProgressText = styled.span`
  position: absolute;
  right: 10px;
  top: -30px; // 텍스트 위치 조정
  font-size: 12px;
  color: lightgray;
`

export const LottieTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: coral;
`

export const Space = styled.div`
  height: 50px;
`
