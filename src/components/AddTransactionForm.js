import React, { useState } from 'react'
import {Alert} from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddTransactionForm({transactions, setTransactions}) {
    const [amount, setAmount] = useState(0)
    const [name, setName] = useState("")


    const notifyError = (err) => toast.error(err)

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
                    if(name == '') return notifyError ('Expense name is required!')
                    if(name.length <= 2) return notifyError('Expense name is too short!')
                    if(amount == 0) return notifyError('Amount cannot be equal to 0!')
                    const id = uuidv4(); 
                    
                    const newTransaction = {id,name, amount}
                    
                    transactions.push(newTransaction)
                    setTransactions([...transactions])
                }}>Add transaction</button>
            </form>
            
        </>
    )
}
