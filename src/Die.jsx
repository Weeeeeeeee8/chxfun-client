// React
import React, { Component, Fragment } from 'react'

// Libs
import times from 'lodash/times'

// Styles
import Styles from './styles/Styles.scss'

class App extends Component {
  constructor(props) {
    super(props)

    // Value
    let value = parseInt(props.value)

    if (value <= 0) {
      value = 1
    }
    if (value > 6) {
      value = 6
    }

    let dots = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    switch (value) {
      case 1:
        dots = [0, 0, 0, 0, 1, 0, 0, 0, 0]
        break
      case 2:
        dots = [0, 0, 1, 0, 0, 0, 1, 0, 0]
        break
      case 3:
        dots = [0, 0, 1, 0, 1, 0, 1, 0, 0]
        break
      case 4:
        dots = [1, 0, 1, 0, 0, 0, 1, 0, 1]
        break
      case 5:
        dots = [1, 0, 1, 0, 1, 0, 1, 0, 1]
        break
      case 6:
        dots = [1, 1, 1, 0, 0, 0, 1, 1, 1]
        break
    }

    // Colors
    let dotColor = props.dotColor ? props.dotColor : '#000'
    let borderColor = props.borderColor ? props.borderColor : '#000'
    let bgColor = props.bgColor ? props.bgColor : '#fff'

    this.state = { value, dots, dotColor, borderColor, bgColor }
  }

  render() {
    return (
      <div
        className={Styles.die}
        style={{
          borderColor: this.state.borderColor,
          background: this.state.bgColor,
        }}
      >
        {this.state.dots.map((v, i) => {
          if (v === 1) {
            return (
              <div
                key={i}
                className={Styles.dot}
                style={{ background: this.state.dotColor }}
              />
            )
          } else {
            return <div key={i} />
          }
        })}
      </div>
    )
  }
}

export default App
