import React, {useState} from 'react'

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <>
        <h3>Add a new transaction</h3>
        <form>
        <label htmlFor="text">Text</label>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter the text...'/>
        <label htmlFor="amount">
            Amount <br/>
            (negative: expense, positive: income)
        </label>
        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter the amount...'/>
        </form>
        <button class='btn'>Add transaction</button>
    </>
  )
}

export default AddTransaction