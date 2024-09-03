import './index.css'

const NavBar = props => {
  const {timeRemaining, topScore} = props
  return (
    <nav className="nav-bar-container">
      <div className="logo-title-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <div className="score-container">
          <p className="score">
            Score: <span className="counter">{topScore}</span>
          </p>
          <div className="time-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="time-logo"
            />
            <p className="timer">{timeRemaining} sec</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
