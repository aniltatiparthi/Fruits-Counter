// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  onClickMangoes = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onClickBananas = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="main-container">
        <div className="fruits-counter-container">
          <h1 className="count-text">
            Bob ate <span className="count">{mangoesCount}</span> mangoes
            <span className="count">{bananasCount}</span> bananas
          </h1>

          <div className="fruits-container">
            <div className="fruits-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="fruit-img"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickMangoes}
                >
                  Eat Mango
                </button>
              </div>
            </div>

            <div className="fruits-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="fruit-img"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickBananas}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
