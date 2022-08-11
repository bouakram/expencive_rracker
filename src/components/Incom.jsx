import React , {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState.jsx'

const Incom = () => {
  
  const {transaction} = useContext(GlobalContext)
  
  const amounts = transaction.map(transaction => transaction.amount);
  const incom = amounts.filter(total => total>0).reduce((acc, item) => (acc += item), 0);
  const expense = amounts.filter(total => total<0).reduce((acc, item) => (acc += item), 0);
  
  return ( <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">+${incom}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">-${expense}</p>
        </div>
      </div>
  )
}

export default Incom
