import { numberReducer } from "./number";
import { userReducer } from "./user";

export default function reducer(state, action){
    let newState = numberReducer(state, action)
    return userReducer(newState,action)
}

/*
export default function reducer(state,action){
  switch(action.type){
      case 'numberAdd2':
              return {...state,number:state.number +2}
      case 'login':
              return {...state, user:{name:action.payLoad}}
      case 'numberX7':
          return {...state, number: state.number > 0 ? state.number * 7 : 0}
      case 'numberDiv25':
          return {...state, number:state.number / 25}
      case 'numberParceInt':
          return {...state, number:parseInt(state.number)}
      case 'numberAddN':
          return {...state, number:action.payLoad}
      default:
          return state
  }
}*/