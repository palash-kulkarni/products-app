import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ProductForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productName: this.props.product.productName,
      desc: props.product.desc,
      image: props.product.image,
      like: false
    }
  
    this.handleChange = this.inputChangedHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.likeProduct = this.likeProduct.bind(this);
  }

  inputChangedHandler(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.setState({ [fieldName]: fieldValue });
  }

  handleSubmit(event) {
    // NOTE : API Call to Update Product
    event.preventDefault();
  }

  likeProduct(event) {
    this.setState({ like: !this.state.like })
    event.preventDefault();
  }

  renderProductForm() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="input">Product Name</label>
                <input type="text" className="form-control" 
                       value={this.state.productName}
                       name="productName"
                       onChange={(event)=>this.inputChangedHandler(event)} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="input">Product Image</label>
                <input type="text" className="form-control" 
                       value={this.state.image}
                       name="image"
                       onChange={(event)=>this.inputChangedHandler(event)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="input">Product Description</label>
                <textarea type="text" className="form-control" 
                          value={this.state.desc}
                          name="desc"
                          onChange={(event)=>this.inputChangedHandler(event)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-1">
                <input type="submit" className="btn btn-primary" value="Update" />
              </div>
              <div className="form-group col-md-1">
                <button type="button" className="btn btn-primary" onClick={this.likeProduct}>Like</button>
              </div>
              <div className="form-group col-md-1">
                { this.state.like ? 'Liked by you' : '' }
              </div>
            </div>
          </div>
        </form>
      </div>
    )
   }

  render() {
    return (
      this.renderProductForm()
    )
  }
}
