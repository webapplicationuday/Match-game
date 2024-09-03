import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="loose-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="score-head">YOUR SCORE</p>
      <p className="count">{score}</p>
      <button className="play-again" type="button" onClick={onClickPlayAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset"
        />
        <p className="button-name">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default WinOrLoseCard
