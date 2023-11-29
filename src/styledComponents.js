import styled from 'styled-components/macro'

export const GameBgColorContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #223a5f;
  min-height: 100vh;
  padding: 20px;
`
export const GameScoreContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 12px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  width: 80%;
  margin-top: 2px;
`
export const GameScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const GameScoreName = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 20px;

  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 567px) {
    font-size: 16px;
  }
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  width: 16%;
  height: 100%;
  border: none;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 567px) {
    width: 25%;
  }
`
export const ScoreHeading = styled.p`
  font-size: 25px;
  margin-bottom: 0px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (max-width: 567px) {
    font-size: 16px;
  }
`
export const Score = styled.p`
  font-family: 'Roboto';
  font-size: 40px;
  margin-top: 0px;
  text-align: center;
  @media screen and (max-width: 567px) {
    font-size: 25px;
    margin-top: 10px;
  }
`
export const GameRulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 567px) {
    margin-bottom: 20px;
  }
`

export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  height: 300px;
  background-color: #ffffff;
  width: 450px;
  @media screen and (max-width: 567px) {
    width: 100%;
    height: 250px;
  }
`

export const PopUpImage = styled.img`
  width: 300px;
  height: 200px;
  margin-top: auto;
  align-self: center;
  margin-bottom: 20px;
  @media screen and (max-width: 567px) {
    width: 200px;
    height: 190px;
  }
`
