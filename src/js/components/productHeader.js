import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductCell from './productCell'

export default class ProductHeader extends Component {

  renderProductHeader() {
    return (
      <div className="row">
        <ProductCell content={this.props.header.productName} />
        <ProductCell content={this.props.header.image} />
        <ProductCell content={this.props.header.desc} />
        <ProductCell content={this.props.header.likes} />
        <ProductCell content="Action" />
      </div>
    )
   }

  render() {
    return (
      this.renderProductHeader()
    )
  }
}
