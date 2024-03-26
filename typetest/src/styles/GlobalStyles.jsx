import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  width: 500px;
  background-color: #ffffff;

  @media (max-width: 500px) {
    max-width: 100%;
    height: 100vh;
  }
`

export const Button = styled.div`
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
  cursor: pointer; /* 마우스 오버 시 커서 모양 변경 */
  transition: all 0.3s ease-in-out; /* 상태 변화 애니메이션 */

  &:hover {
    background-color: #3399ff; /* 호버 시 배경색 변경 */
  }
`

export const FooterContainer = styled.div`
  position: absolute;
  top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  height: 50px;
  color: chocolate;
  width: 70%;
  text-align: center;
  /* background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px); */
`
