import { connect } from 'react-redux'
import fetch from 'cross-fetch'

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

function requestProducts() {
  return {
    type: REQUEST_PRODUCTS,
    products: []
  }
}

function receiveProducts(json) {
  return {
    type: RECEIVE_PRODUCTS,
    products: json.map(child => child),
    receivedAt: Date.now()
  }
}

function updateProduct() {
    return {
        type: UPDATE_PRODUCT,
        products: json.map(child => child)
    }
}

function fetchProducts() {
  return dispatch => {
    dispatch(requestProducts())
    // return fetch(`API_URL`)
    //   .then(response => response.json())
    //   .then(json => dispatch(receiveProducts(json)))
    var data = [{
             "productName": "Product - 1",
             "image": "image_1.jpg",
             "desc": "Description of Product 1",
             "likes": 2,
             "comments": [{
                "text": "Comment for Product 1"
             }, {
                "text": "Comment for Product 1"
             }, {
                "text": "Comment for Product 1"
             }, {
                "text": "Comment for Product 1"
             }, {
                "text": "Comment for Product 1"
             }]
           },{
             "productName": "Product - 2",
             "image": "image_2.jpg",
             "desc": "Description of Product 2",
             "likes": 2,
             "comments": [{
                "text": "Comment for Product 2"
             }, {
                "text": "Comment for Product 2"
             }, {
                "text": "Comment for Product 2"
             }, {
                "text": "Comment for Product 2"
             }, {
                "text": "Comment for Product 2"
             }, {
                "text": "Comment for Product 2"
             }, {
                "text": "Comment for Product 2"
             }]
           },{
             "productName": "Product - 3",
             "image": "image_3.jpg",
             "desc": "Description of Product 3",
             "likes": 2,
             "comments": [{
                "text": "Comment for Product 3"
             }, {
                "text": "Comment for Product 3"
             }, {
                "text": "Comment for Product 3"
             }, {
                "text": "Comment for Product 3"
             }, {
                "text": "Comment for Product 3"
             }, {
                "text": "Comment for Product 3"
             }, {
                "text": "Comment for Product 3"
             }]
           },{
             "productName": "Product - 4",
             "image": "image_4.jpg",
             "desc": "Description of Product 4",
             "likes": 2,
             "comments": [{
                "text": "Comment for Product 4"
             }]
           },{
             "productName": "Product - 5",
             "image": "image_5.jpg",
             "desc": "Description of Product 5",
             "likes": 2,
             "comments": [{
                "text": "Comment for Product 5"
             }]
           },{
             "productName": "Product - 6",
             "image": "image_6.jpg",
             "desc": "Description of Product 6",
             "likes": 2,
             "comments": [{
                "text": "Comment for Product 6"
             }]
           },{
             "productName": "Product - 7",
             "image": "image_7.jpg",
             "desc": "Description of Product 7",
             "likes": 2,
             "comments": [{
                "text": "Comment for Product 7"
             }]
           },{
             "productName": "Product - 8",
             "image": "image_8.jpg",
             "desc": "Description of Product 8",
             "likes": 2,
             "comments": [{
                "text": "Comment for Product 8"
             }]
           },{
             "productName": "Product - 9",
             "image": "image_9.jpg",
             "desc": "Description of Product 9",
             "likes": 2,
             "comments": [{
                "text": "Comment for Product 9"
             }]
           },{
             "productName": "Product - 10",
             "image": "image_10.jpg",
             "desc": "Description of Product 10",
             "likes": 2,
             "comments": [{
                "text": "Comment for Product 10"
             }]
           },{
             "productName": "Product - 11",
             "image": "image_11.jpg",
             "desc": "Description of Product 11",
             "likes": 2,
             "comments": [{
                "text": "Comment for Product 11"
             }]
           },{
             "productName": "Product - 12",
             "image": "image_12.jpg",
             "desc": "Description of Product 12",
             "likes": 2,
             "comments": [{
                "text": "Comment for Product 12"
             }]
           }]
    return dispatch(receiveProducts(data))
  }
}

export function fetchProductsIfNeeded() {
  return (dispatch, getState) => {
    return dispatch(fetchProducts())
  }
}

export function updateProduct(data) {
    return (dispatch, getState) => {
        dispatch({
            type: UPDATE_PRODUCTS
        })
    }
}
