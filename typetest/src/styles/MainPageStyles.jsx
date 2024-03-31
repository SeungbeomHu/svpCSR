import styled from "styled-components"

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 40px;
`

export const TitleImg = styled.div`
  width: 100px;
  height: 160px;
  background-image: url("/images/cup.png");
  background-size: 100% 100%;
`
export const Title = styled.div`
  font-size: 30px;
  padding: 10px;
  line-height: 1.5;
  margin-bottom: 10px;
`
export const SubTitle = styled.div`
  font-size: 15px;
  color: black;
  margin: 5px 0;
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; /* 마우스 오버 시 커서 모양 변경 */
`
export const InstagramLogo = styled.div`
  background-image: url("/images/instagram.png");
  background-size: 100% 100%;
  width: 26px;
  height: 26px;
  margin-right: 5px;
`
export const LogoDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`

export const ParticipantsCount = styled.div`
  margin-top: 10px;
  font-size: 13px !important;
`
