import styled from "styled-components"

export const ResultPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  width: 500px;
  background-color: white;

  @media (max-width: 500px) {
    max-width: 100%;
    height: 100%;
  }
`

export const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.$image});
  background-size: 100% 100%;
  margin-bottom: -30px;
  z-index: 1;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 5px;
  padding: 30px;
  border-radius: 30px;
  margin-bottom: 50px;
  line-height: 1.7;
  box-shadow: 0 4px 10px rgba(255, 165, 0, 0.4),
    0 0 5px rgba(255, 255, 255, 0.8);
  position: relative;
  z-index: 2;
  top: -30px;
  background-color: white;
  backdrop-filter: blur(4px);
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: bold;
  height: 150px;
`

export const SubTitle = styled.div`
  font-size: 18px;
  padding: 10px;
`

export const TypeName = styled.div`
  font-size: 35px;
  padding: 10px;
  color: orange;
`

export const Line = styled.div`
  background-color: #fde5ca;
  width: 30px;
  height: 5px;
`

export const Description = styled.div`
  text-align: center;
  font-size: 17px;
  height: 200px;
`

export const ShareTitle = styled.p`
  font-size: 17px;
  font-weight: bolder;
  text-align: center;
  color: orange;
`

export const ShareBox = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-between;
`

export const ShareCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border: 1px solid black;
  border-radius: 50%;
`
