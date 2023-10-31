import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hook/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [into, setInto] = useState('pkr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = ()=>{
    setFrom(into);
    setInto(from);

    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const calcualtions = ()=>{
   setConvertedAmount(amount * currencyInfo[into]); 
  }

  return (
    
    <div className='bg-gray-700 p-8 rounded-3xl'>

      <h1 className='m-4 font-bold'>Currency Converter</h1>

      <div className='flex flex-col gap-10 bg-gray-600 p-10 rounded-2xl'>

        <InputBox
          label="From"
          amount={amount}
          setAmount={setAmount}
          currency={from}
          setCurrency={setFrom}
          currencyOptions={options}

        />

        <InputBox
          label="Into"
          amount={convertedAmount}
          setAmount={setConvertedAmount}
          currency={into}
          setCurrency={setInto}
          currencyOptions={options}
          
        />

        <button onClick={swap} className=''>Swap</button>

      </div>

      <button onClick={calcualtions} className='my-6 w-60 text-lg bg-gray-600'>Convert {from.toUpperCase()} into {into.toUpperCase()}</button>

    </div>
          
  )
}

export default App
