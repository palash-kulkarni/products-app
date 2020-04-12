import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProductsIfNeeded, updateProduct } from '../actions'
import { Route } from 'react-router-dom'
import Products from '../components/Products'
import ProductHeader from '../components/productHeader'
import ProductDetails from '../components/productDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sass/main.scss';
import { CALLBACK_ENUMS } from '../components/productForm'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchProductsIfNeeded())
  }

  componentDidUpdate(prevProps) {
  }

  handleChange(nextSubreddit) {
  }

  handleRefreshClick(e) {
  }

  callbackHandler(type, data) {
    switch(type) {
      case CALLBACK_ENUMS.UPDATE_PRODUCT:
        this.props.dispatch(updateProduct(data));
    }
  }

  render() {
    const { products, isFetching } = this.props
    const headers = { productName: "Product Name", image: "Image", desc: "Description", likes: "Likes" }

    return (
      <div className="container-lg container-md container-sm">
        {isFetching && products.length === 0 && <h2>Loading...</h2>}
        {!isFetching && products.length === 0 && <h2>Empty.</h2>}
        {products.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Route exact={true} path="/" render={() => (
              <div>
                <ProductHeader header={headers} />
                <Products products={products} callbackHandler={this.callbackHandler} />
              </div>
            )}/>
            <Route path="/products/:productName" render={(props) => <ProductDetails {...props} />} />
          </div>
        )}
      </div>
    )
  }
}

AsyncApp.propTypes = {
  products: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {

  const { isFetching, items: products } = {
    isFetching: true,
    items: state.products.items
  }

  return {
    products,
    isFetching: true
  }
}

export default connect(mapStateToProps)(AsyncApp)