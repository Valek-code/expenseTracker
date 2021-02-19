import React from 'react'

export default function IncomeExpenses({transactions}) {
    
    let newInc = 0
    let newExp = 0
    
    return (
        <div className="inc-exp-container">
            
            {transactions.map(t =>{
                if(t.amount <= 0){
                    newExp += t.amount
                }else
                    newInc += t.amount
            })}
            
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${newInc}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p id="money-minus" className="money minus">-${Math.abs(newExp)}</p>
            </div>
        </div>
    )
}
