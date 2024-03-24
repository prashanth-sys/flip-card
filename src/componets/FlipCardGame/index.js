import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'

import './index.css'

class FlipCardGame extends Component {
  toggleModel = () => {
    this.setState(prevState => ({
      isModelOpen: !prevState.isModelOpen,
    }))
  }

  render() {
    return (
      <div className="flip-card-container">
        <div className="game-rules-container">
          <div>
            <Link to="/card-flip-memory-game" className="link">
              <button type="button" className="back-button">
                <BiArrowBack className="icon" />
                <p className="back">Back</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default FlipCardGame
