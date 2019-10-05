const defaultState = {
  charities: []
}

function reducer(prevState = defaultState, action) {
  switch(action.type) {
    case"FETCH_ALL_CHARITIES":
    console.log("here")
      return{...prevState, charities: action.payload}
    default:
      return prevState
  }
}

export default reducer;
