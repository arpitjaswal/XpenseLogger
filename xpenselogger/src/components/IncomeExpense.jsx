import React from 'react'

const IncomeExpense = () => {
  return (
    <>
        <div className="inc-exp-container">
            <div id="money-plus" className="money plus">
                <h4>Income</h4>
                <p>+$0.00</p>
                </div>
            <div id="money-minus" className="money minus">
                <h4>Expense</h4>
                <p>-$0.00</p>
                </div>
        </div>
    </>
  )
}

export default IncomeExpense;