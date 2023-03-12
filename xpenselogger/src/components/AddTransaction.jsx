import React from 'react'

const AddTransaction = () => {
  return (
    <>
        <h3>Add a new transaction</h3>
        <form>
        <label htmlFor="text">Text</label>
        <input type="text" placeholder='Enter the text...'/>
        <label htmlFor="amount">
            Amount <br/>
            (negative: expense, positive: income)
        </label>
        <input type="number" placeholder='Enter the amount...'/>
        </form>
        <button class='btn'>Add transaction</button>
    </>
  )
}

export default AddTransaction