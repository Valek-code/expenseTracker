import React from 'react'

export default function Transaction({id,setTransactions, transactions, text, amount}) {
    return (
        <div>
        
            {amount <= 0 ? <li className="minus">
                {text} <span>{amount}</span><button className="delete-btn" onClick={(e) => {
                    e.preventDefault()
                    let elementToRemove = transactions.indexOf(transactions.find(element => element.id == id))
                    transactions.splice(elementToRemove, 1)
                    setTransactions([...transactions])
                }}>X</button>
            </li> : <li className="plus">
                {text} <span>+{amount}</span><button className="delete-btn" onClick={(e) => {
                    e.preventDefault()
                    let elementToRemove = transactions.indexOf(transactions.find(element => element.id == id))
                    transactions.splice(elementToRemove, 1)
                    setTransactions([...transactions])
                }}>X</button>
            </li> }
        </div>
    )
}
