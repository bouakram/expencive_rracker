import React , {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState.jsx'

const Balanc = () => {
  const {transaction} = useContext(GlobalContext)
  
  const amounts = transaction.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  )
}

export default Balanc
