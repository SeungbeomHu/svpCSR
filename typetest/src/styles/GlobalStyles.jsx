import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
  max-width: 500px;
  background-color: white;

  @media (max-width: 500px) {
    max-width: 100%;
    height: auto;
  }
`

export const Button = styled.div`
  width: 80%;
  text-align: center;
  padding: 15px 10px;
  border-radius: 10px;
  border: 2px solid transparent;
  background-color: #4164fa;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer; /* 마우스 오버 시 커서 모양 변경 */
  transition: all 0.3s ease-in-out; /* 상태 변화 애니메이션 */

  &:hover {
    background-color: #3399ff; /* 호버 시 배경색 변경 */
  }
`
