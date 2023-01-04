import React, {Component} from 'react'
import Results from '../Results/Results'

class Main extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <h2>Main Component</h2>
        <Results />
      </div>
    )
  }
}

export default Main