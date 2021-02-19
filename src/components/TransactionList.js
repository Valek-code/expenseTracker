import React, { useEffect } from 'react'
import Transaction from './Transaction'

export default function TransactionList({transactions, setTransactions}) {
    
    return (
        <>
        
            <ul id="list" className="list">
                
                {transactions === undefined || transactions.length == 0 ? <h2>No transactions.. Add one!</h2> :transactions.map((t) => {
                    
                    return <Transaction id={t.id} transactions={transactions} setTransactions={setTransactions} key={t.id} text={t.name} amount={t.amount}/>
                    
                })} 
            </ul>
            
        </>
    )
}
