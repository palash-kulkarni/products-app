const products = (state = { items: [], isFetching: true }, action) => {
  switch (action.type) {
    case 'REQUEST_PRODUCTS':
      return Object.assign({}, state, { isFetching: true, 
                                        items: action.products })
    case 'RECEIVE_PRODUCTS':
      return Object.assign({}, state, { isFetching: false, 
                                        items: action.products })
    default:
      return state
  }
}

export default products