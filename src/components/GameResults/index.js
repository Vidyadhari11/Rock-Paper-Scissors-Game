import {
  GameContainer,
  GameButton,
  GameImage,
  ResultImageContainer,
  ResultName,
  Result,
  ResultButton,
} from './styledComponents'

const GameResults = props => {
  const {
    choicesList,
    opponentChoice,
    isShow,
    text,
    newArray,
    restartGame,
  } = props

  const getResultView = () => (
    <>
      <ResultImageContainer>
        <ResultName>YOU</ResultName>
        <GameImage src={newArray[0].imageUrl} alt="Your choice" />
      </ResultImageContainer>
      <ResultImageContainer>
        <ResultName>OPPONENT</ResultName>
        <GameImage src={newArray[1].imageUrl} alt="Opponent choice" />
      </ResultImageContainer>
      <ResultImageContainer>
        <Result>{text}</Result>
        <ResultButton type="button" onClick={restartGame}>
          PLAY AGAIN
        </ResultButton>
      </ResultImageContainer>
    </>
  )

  const getGameView = () => (
    <>
      <GameButton
        type="button"
        data-testid="rockButton"
        onClick={() => opponentChoice(choicesList[0].id)}
      >
        <GameImage
          src={choicesList[0].imageUrl}
          alt={choicesList[0].id}
          key={choicesList[0].id}
        />
      </GameButton>
      <GameButton
        type="button"
        data-testid="scissorsButton"
        onClick={() => opponentChoice(choicesList[1].id)}
      >
        <GameImage
          src={choicesList[1].imageUrl}
          alt={choicesList[1].id}
          key={choicesList[1].id}
        />
      </GameButton>
      <GameButton
        type="button"
        data-testid="paperButton"
        onClick={() => opponentChoice(choicesList[2].id)}
      >
        <GameImage
          src={choicesList[2].imageUrl}
          alt={choicesList[2].id}
          key={choicesList[2].id}
        />
      </GameButton>
    </>
  )

  return (
    <GameContainer>{isShow ? getGameView() : getResultView()}</GameContainer>
  )
}

export default GameResults
