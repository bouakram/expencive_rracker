import React , {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState.jsx'

const Ternsaction = () => {
  const {transaction} = useContext(GlobalContext)
  const {delettransaction} = useContext(GlobalContext)
  return (
    <div>
      <h3>History</h3>
      <ul id="list" class="list">
    {transaction.map(trensact => {
      return(
         <li key={trensact.id} class={trensact.amount<0 ?"minus" : "plus"}>
        {trensact.text} <span>{trensact.amount < 0 ? null : '+'}{trensact.amount} $</span><button onClick={()=>{delettransaction(trensact.id)}} class="delete-btn">x</button>
        </li>
      )
    })}
      </ul>
    </div>
  )
}

export default Ternsaction
