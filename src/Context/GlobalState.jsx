import React , {createContext, useReducer} from 'react'
import appreducer from './Appreducer'

const initialState = {
  trensaction :[]
}

export const GlobalContext = createContext(initialState)

export const GlobaleProvider = ({children})=>{
  const [state , dispatch] = useReducer(appreducer , initialState)

  function delettransaction (id){
    dispatch({type : 'delet', payload : id})
  }
  function addttransaction (trensaction){
    dispatch({type : 'add', payload : trensaction})
  }

return (<GlobalContext.Provider value = {{transaction : state.trensaction, delettransaction , addttransaction }}> {children} 
  </GlobalContext.Provider>)}
