import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Comments extends Component {

  renderComments() {
    return this.props.comments.map((comment, index) => {
      return (
        <div key={index}>
          {comment.text}
        </div>
      )
    })
  }

  render() {
    return (
      this.renderComments()
    )
  }
}
