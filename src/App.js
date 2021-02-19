import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function App() {

  const [transactions, setTransactions] = useState([])

  const dummyData = [

    {

      id: 0,
      name: 'Clothing', 
      amount: -100

    },
    {

      id: 1,
      name: 'Food', 
      amount: -100

    },
    {

      id: 2,
      name: 'Movies', 
      amount: 50

    },

  ]


  useEffect(() => {
  
    setTransactions([...dummyData])
  
  },[])


  return (
    <div className="App">
      <Header />
      <div className="container">

        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions}/>
        <TransactionList transactions={transactions} setTransactions={setTransactions} />
        <AddTransactionForm transactions={transactions} setTransactions={setTransactions} />

      </div>
    </div>
  );
}

export default App;
