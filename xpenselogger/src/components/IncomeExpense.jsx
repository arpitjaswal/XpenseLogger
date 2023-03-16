import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const IncomeExpense=()=>{
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction=>transaction.amount);
  const income = amounts.filter(item=>item>0).reduce((acc,item)=>acc+=item,0).toFixed(2);
  const expense = amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    return (
      <>
          <div className="inc-exp-container">
              <div id="money-plus" className="money plus">
                  <h4>Income</h4>
                  <p>{income}</p>
                  </div>
              <div id="money-minus" className="money minus">
                  <h4>Expense</h4>
                  <p>{expense}</p>
                  </div>
          </div>
      </>
    )
}

export default IncomeExpense;