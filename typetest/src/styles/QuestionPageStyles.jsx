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
  width: 60%;
  font-size: 22px;
  text-align: center;
  padding: 20px;
  word-break: keep-all;
  line-height: 1.5;
`
export const AnswerBox = styled.div`
  width: 60%;
  text-align: center;
  margin: 10px 0px;
  padding: 15px 10px;
  border-radius: 30px;
  border: 2px solid #4a2605;
  background-color: #6d492c;
  color: white;
  font-size: 16px;
  /* font-weight: bold; */
  cursor: pointer;
  word-break: keep-all;

  // 모바일에서 hover 효과 미적용
  @media (hover: hover) {
    &:hover {
      background-color: #ae7533;
    }
  }

  @media (max-width: 500px) {
    &:active {
      background-color: #ae7533;
    }
  }
`

export const ProgressBarContainer = styled.div`
  width: 65%;
  background-color: white;
  border: 2px solid #4a2605;
  border-radius: 20px;
  margin: 50px 0;
  position: relative;
`
export const ProgressBarImg = styled.div`
  position: absolute;
  top: -10px;
  height: 35px;
  width: 42px;
  background-size: 100% 100%;
  background-image: url("/images/progressbar-cup.png");
  left: ${(props) => `calc(${props.width}% - 15px)`};
  transition: left 0.5s ease-in-out;
`

export const ProgressBar = styled.div`
  height: 20px;
  background-color: #b37d4a;
  border-radius: 20px;
  width: ${(props) => props.width}%;
  transition: width 0.5s ease-in-out;
`

export const ProgressText = styled.span`
  position: absolute;
  right: 10px;
  top: 30px; // 텍스트 위치 조정
  font-size: 12px;
  color: black;
`

export const LottieTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`

export const Space = styled.div`
  height: 50px;
`
