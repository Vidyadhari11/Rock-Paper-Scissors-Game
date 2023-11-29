import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './App.css'

import {
  GameBgColorContainer,
  GameScoreContainer,
  GameScoreNameContainer,
  GameScoreName,
  ScoreContainer,
  ScoreHeading,
  Score,
  GameRulesView,
  PopUpView,
  PopUpImage,
} from './styledComponents'

import GameResults from './components/GameResults'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    isShow: true,
    text: '',
    newArray: [choicesList[0], choicesList[1]],
  }

  updateResult = (you, opponent) => {
    if (you.id === 'ROCK') {
      switch (opponent.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (you.id === 'PAPER') {
      switch (opponent.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponent.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  restartGame = () => this.setState({isShow: true})

  opponentChoice = id => {
    const {score} = this.state
    const opponent = choicesList[Math.floor(Math.random() * choicesList.length)]
    const you = choicesList.find(each => each.id === id)
    const result = this.updateResult(you, opponent)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      score: newScore,
      isShow: false,
      text: result,
      newArray: [you, opponent],
    })
  }

  render() {
    const {isShow, text, score, newArray} = this.state
    return (
      <GameBgColorContainer>
        <GameScoreContainer>
          <GameScoreNameContainer>
            <GameScoreName>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </GameScoreName>
          </GameScoreNameContainer>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <Score>{score}</Score>
          </ScoreContainer>
        </GameScoreContainer>
        <GameResults
          isShow={isShow}
          choicesList={choicesList}
          text={text}
          newArray={newArray}
          restartGame={this.restartGame}
          opponentChoice={this.opponentChoice}
        />
        <GameRulesView>
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                RULES
              </button>
            }
          >
            {close => (
              <PopUpView>
                <button
                  className="trigger-close-button"
                  type="button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopUpView>
            )}
          </Popup>
        </GameRulesView>
      </GameBgColorContainer>
    )
  }
}

export default App
