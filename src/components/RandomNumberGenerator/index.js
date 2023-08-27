// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onRandomNumber = () => {
    const createRandomeNumber = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: createRandomeNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" onClick={this.onRandomNumber} type="button">
            Generate
          </button>
          <p className="rdn">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
