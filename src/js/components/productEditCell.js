import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class ProductEditCell extends Component {

  renderProductEditCell() {
    return (
      <div className="col-lg col-md col-sm">
        <Link to={{
          pathname: `/products/${this.props.product.productName}`,
          state: {
            product: this.props.product
          }
        }}>
          <button type="button" className="btn btn-primary">Edit</button>
        </Link>
      </div>
    )
   }

  render() {
    return (
      this.renderProductEditCell()
    )
  }
}
