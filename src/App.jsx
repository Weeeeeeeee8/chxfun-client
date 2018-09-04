// React
import React, { Component, Fragment } from 'react'

// Styles
import Styles from './styles/Styles.scss'

// Components
import Die from './Die.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dice: [],
    }
  }

  componentDidMount = () => {
    this.setState({ dice: this.rollDice(6) })
  }

  render() {
    return (
      <div>
        <div id={Styles.board}>
          {this.state.dice.map((die, i) => {
            return <Die key={i + '' + die} value={die} />
          })}
        </div>
        <div id={Styles.controls}>
          <button
            onClick={() => {
              this.setState({ dice: this.rollDice(6) })
            }}
          >
            Shuffle
          </button>
        </div>
      </div>
    )
  }

  rollDice = n => {
    let dice = []

    for (let i = 0; i < n; i++) {
      dice.push(this.rollDie())
    }

    return dice
  }

  rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
  }
}

export default App
