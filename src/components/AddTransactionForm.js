import React, { useState } from 'react'
import {Alert} from '@material-ui/core'

export default function AddTransactionForm({transactions, setTransactions}) {
    const [amount, setAmount] = useState(0)
    const [name, setName] = useState("")

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form">
                <div className="form-control">
                <label htmlFor="text">Expense name:</label>
                <input type="text" id="text" value={name} placeholder="Enter text..." onChange={(e) => {
                    setName(e.target.value)
                }} />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label>
                <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => {
                    setAmount(parseInt(e.target.value))
                }}  />
                </div>
                <button className="btn" onClick={(e) => {
                    
                    e.preventDefault()
                    if(name == '') return alert('Must have a name')
                    if(name.length <= 2) return alert('Must have a longer name')
                    if(amount == 0) return alert("Can't make a transaction with 0$!")
                    let lastID = transactions[transactions.length-1].id
                    
                    const newTransaction = {id:lastID+1,name, amount}
                    
                    transactions.push(newTransaction)
                    setTransactions([...transactions])
                }}>Add transaction</button>
            </form>
            
        </>
    )
}
