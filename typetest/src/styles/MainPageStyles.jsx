import styled from "styled-components"

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  margin-bottom: 40px;
`
export const Title = styled.div`
  color: darkorange;
  font-size: 25px;
  font-weight: bold;
  padding: 10px;
`
export const SubTitle = styled.div`
  font-size: 15px;
  color: gray;
`
export const CoverImg = styled.div`
  width: 80%;
  height: 250px;
  border-radius: 20px;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  margin-bottom: 20px;
`
