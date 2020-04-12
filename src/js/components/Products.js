import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductRow from './productRow'

export default class Products extends Component {

  renderProductsData() {
    return this.props.products.map((product, index) => {
      return (
        <div key={index}>
          <ProductRow item={product} callbackHandler={this.props.callbackHandler} />
        </div>
      )
    })
  }

  render() {
    return (
      this.renderProductsData()
    )
  }
}

Products.propTypes = {
  products: PropTypes.array.isRequired
}