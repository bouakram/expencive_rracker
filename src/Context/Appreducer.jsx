export default (state , action) =>{
switch (action.type) {
  case "delet": 
    return {
      ...state,
      trensaction : state.trensaction.filter(trans => trans.id !== action.payload)
    }
  default:
    return state
}}
