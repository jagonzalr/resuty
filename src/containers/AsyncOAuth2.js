
import React, { PropTypes, Component } from 'react'

class AsyncOAuth2 extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return(
      <div>
        <h2>Resuty</h2>
      </div>
    )
  }
}

export default AsyncOAuth2