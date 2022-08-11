import React , {useState} from 'react'
const Add = () => {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)
  return (
    <div>
       <h3>Add new transaction</h3>
      <form id="form">
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} id="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"value={amount} onChange={(e)=>{setAmount(e.target.value)}} id="amount" placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default Add
