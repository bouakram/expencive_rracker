import React , {createContext, useReducer} from 'react'
import appreducer from './Appreducer'

const initialState = {
  trensaction :[
   { id: 1, text: 'Flower', amount: -20 },
   { id: 2, text: 'Salary', amount: 300 },
   { id: 3, text: 'Book', amount: -10 },
   { id: 4, text: 'Camera', amount: 150 }
  ]
}

export const GlobalContext = createContext(initialState)

export const GlobaleProvider = ({children})=>{
  const [state , dispatch] = useReducer(appreducer , initialState)

return (<GlobalContext.Provider value = {{transaction : state.trensaction }}>
  {children} 
  </GlobalContext.Provider>)}
