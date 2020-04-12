import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductCell from './productCell'
import ProductEditCell from './productEditCell'
import ProductImageCell from './productImageCell'

export default class ProductRow extends Component {

  renderProductRow() {
    return (
      <div className="row productRow">
        <ProductCell content={this.props.item.productName} />
        <ProductImageCell content={this.props.item.image} />
        <ProductCell content={this.props.item.desc} />
        <ProductCell content={this.props.item.likes} />
        <ProductEditCell product={this.props.item} callbackHandler={this.props.callbackHandler} />
      </div>
    )
   }

  render() {
    return (
      this.renderProductRow()
    )
  }
}

ProductRow.propTypes = {
  item: PropTypes.object.isRequired
}
