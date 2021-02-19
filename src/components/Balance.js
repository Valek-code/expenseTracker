import React from 'react'

export default function Balance({transactions}) {
    let newBal = 0
    return (
        <>
            {transactions.map((t) => {
                newBal+=t.amount
            })}
            <h4>Total balance: </h4>
            <h1 id="balance">${newBal}</h1>
        </>
    )
}
