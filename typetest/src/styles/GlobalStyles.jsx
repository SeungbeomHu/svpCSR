import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  width: 500px;
  background-image: url("/images/thumbnail.jpg");
  background-size: 100% 100%;

  @media (max-width: 500px) {
    max-width: 100%;
    height: 100vh;
  }
`

export const Button = styled.div`
  width: 60%;
  text-align: center;
  margin: 10px 0px;
  padding: 10px 10px;
  border-radius: 30px;
  border: 2px solid #4a2605;
  background-color: #744f2d;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer; /* 마우스 오버 시 커서 모양 변경 */

  &:hover {
    background-color: #ae7533; /* 호버 시 배경색 변경 */
  }
`

export const HeaderContainer = styled.div`
  font-family: "Diphylleia-Regular";
  position: absolute;
  top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: bolder;
  font-style: italic;
  height: 50px;
  color: #54361a;
  width: 70%;
  text-align: center;
  /* background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px); */
`
