import React from 'react'
import { useId } from 'react';

function InputBox(
    {
        label,
        amount,
        setAmount,
        currency,
        setCurrency,
        currencyOptions = []
    }
    ){

        const inputID = useId();
        const selectID = useId();
  return (
    <div>

        <label htmlFor={inputID} className='text-4xl font-bold m-4'>{label}</label>
        <input type="number"
            id={inputID}
            readOnly={false}
            placeholder='Amount'
            value={amount}
            onChange={ (e) => setAmount && setAmount(Number(e.target.value))}
            className='py-4 px-4 text-lg rounded-lg border-2 border-gray-300 w-96'
        />

        <label htmlFor={selectID} className='text-4xl font-bold m-4'>Currency Type</label>
        <select name="" id={selectID} value={currency} onChange={ (e) => setCurrency && setCurrency(e.target.value)} className='w-24 h-16 text-lg uppercase rounded-lg'>
            {
                currencyOptions.map( (currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))
            }
        </select>

    </div>
  )
}

export default InputBox;