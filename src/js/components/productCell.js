import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ProductCell extends Component {

  renderProductCell() {
      return (
        <div className="col-lg col-md col-sm">{this.props.content}</div>
      )
   }

  render() {
    return (
      this.renderProductCell()
    )
  }
}
