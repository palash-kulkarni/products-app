import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductForm from './productForm'
import Comments from './comments'

export default class ProductDetails extends Component {

  renderProductDetails() {
    const { product } = this.props.location.state
    return (
      <div className="container">
        <div className="well">
          <strong>Product Details</strong>
          <ProductForm product={product} callbackHandler={this.callbackHandler} />
          <strong>Comments</strong>
          <ul>
            <Comments comments={product.comments} />
          </ul>
        </div>
      </div>
    )
   }

  render() {
    return (
      this.renderProductDetails()
    )
  }
}
