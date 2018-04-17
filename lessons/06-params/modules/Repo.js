import React from 'react'

const Reop = React.createClass({
  render () {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
})

export default Reop
