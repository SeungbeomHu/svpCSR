import styled from "styled-components"

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  margin-bottom: 40px;
`
export const Title = styled.div`
  color: chocolate;
  font-size: 27px;
  font-weight: bold;
  padding: 10px;
`
export const SubTitle = styled.div`
  font-size: 15px;
  color: gray;
  margin: 10px 0;
`
export const LogoContainer = styled.div`
  width: 150px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer; /* 마우스 오버 시 커서 모양 변경 */
`
export const InstagramLogo = styled.div`
  background-image: url("/images/instagram.png");
  background-size: 100% 100%;
  width: 40px;
  height: 40px;
`
export const LogoDescription = styled.div`
  width: 105px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  text-decoration: underline;
  text-underline-position: under;
`
