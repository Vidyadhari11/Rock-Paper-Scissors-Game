import styled from 'styled-components/macro'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 500px;
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and (max-width: 567px) {
    width: 300px;
    margin-left: 10px;
    margin-top: 20px;
  }
`

export const GameButton = styled.button`
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;

  margin-right: 10px;
  @media screen and (max-width: 567px) {
    margin-top: 0px;
  }
`

export const GameImage = styled.img`
  width: 180px;
  height: 180px;
  @media screen and (max-width: 567px) {
    width: 120px;
    height: 120px;
  }
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  @media screen and (max-width: 567px) {
    width: 40%;
  }
`

export const ResultName = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 23px;
  @media screen and (max-width: 567px) {
    font-size: 18px;
  }
`
export const Result = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  @media screen and (max-width: 567px) {
    font-size: 25px;
  }
`
export const ResultButton = styled.button`
  background-color: #ffffff;
  border-radius: 9px;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  font-family: 'Bree Serif';
  font-size: 20px;
  width: 160px;
`
