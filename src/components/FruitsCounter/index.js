// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onMango = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  onBanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg-cont">
        <div className="content-cont">
          <h1 className="main-head">
            Bob ate <span className="highlight">{mangoCount}</span> mangoes{' '}
            <span className="highlight">{bananaCount}</span> bananas
          </h1>
          <div className="img-btn-cont">
            <div className="fruit-cont">
              <img
                className="img"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button className="btn" type="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-cont">
              <img
                className="img"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button className="btn" type="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
