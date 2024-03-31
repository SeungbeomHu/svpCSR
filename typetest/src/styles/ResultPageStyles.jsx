import styled from "styled-components"

export const ResultPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 500px;
  /* background-color: #eaddc6; */
  background-image: url("/images/thumbnail.jpg");
  background-size: 100%;

  @media (max-width: 500px) {
    max-width: 100%;
    height: 100%;
  }
`

export const ImgBox = styled.div`
  width: 240px;
  height: 300px;
  background-image: url(${(props) => props.$image});
  background-size: 100% 100%;
  margin-bottom: 20px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  padding: 30px;
  border-radius: 30px;
  margin-top: 50px;
  margin-bottom: 25px;
  line-height: 1.7;
  background-color: #ebdcc5c7;
  border: 1px solid #a79180;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: bold;
  height: 130px;
`

export const SubTitle = styled.div`
  font-size: 18px;
  padding: 10px;
`

export const TypeName = styled.div`
  font-size: 25px;
  padding: 10px;
  color: #785232;
`

export const Line = styled.div`
  background-color: #bb7e4d;
  width: 100%;
  height: 3px;
`

export const Description = styled.div`
  text-align: left;
  font-size: 17px;
  word-break: keep-all;
`
export const MatchTypeContainerTitle = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #785232;
`
export const MatchTypeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`

export const MatchTypeItem = styled.div`
  width: 30%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-break: keep-all;
  text-align: center;
  background-color: #ffffff63;
  border-radius: 10px;
`

export const MatchTypeItemImg = styled.img`
  width: 70px;
  height: 70px;
  background-size: cover;
  margin-bottom: 15px;
`

export const MatchTypeItemText = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  justify-items: center;
  font-weight: bolder;
  color: #785232;
`

export const ShareTitle = styled.p`
  font-size: 17px;
  font-weight: bolder;
  text-align: center;
  color: white;
`

export const ShareBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin-bottom: 25px;
`

export const ShareCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  font-weight: 800;
  font-size: 18px;
  color: white;
  cursor: pointer;
  background-color: #7362ff;
  &:hover {
    background-color: #a99fee;
  }
`
export const KakaoShareButton = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
  background-image: url("/images/kakao.png");
  background-size: cover;
`
