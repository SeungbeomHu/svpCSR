import styled from "styled-components"

export const ResultPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  background-color: white;
  padding: 40px 0px;

  @media (max-width: 500px) {
    max-width: 100%;
    height: auto;
  }
`
export const Title = styled.div`
  width: 80%;
  font-size: 30px;
  font-weight: bolder;
  text-align: center;
  margin: 20px 0px;
`

export const ImgBox = styled.div`
  width: 80%;
  height: 200px;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  border: 2px solid black;
  margin: 20px 0px;
`

export const Description = styled.div`
  width: 80%;
  font-size: 17px;
  margin: 5px;
  padding: 20px 15px;
  border-radius: 30px;
  border: 2px solid black;
  margin-bottom: 50px;
`
