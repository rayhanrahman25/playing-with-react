import { useState, useCallback, useEffect, useRef } from 'react'
import InputBox from './components/InputBox'
import UseCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setonvertedAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('bdt')
  const [currencyDisabled, setCurrencyDisabled] = useState(true)

  const currencyInfo = UseCurrencyInfo(fromCurrency);

  const options = Object.keys(currencyInfo)

  const convertAmount  = () => {
    setonvertedAmount(amount * currencyInfo[toCurrency])
  }

  return (

    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
          }}>
              <div className='w-full mb-1'>
                <InputBox 
                    label={'Amount'}
                    amount={amount}
                    onAmountChange={(amount) => setAmount(amount)}
                    currencyOptions={options}
                    onCurrencyChange={(fromCurrency) => setFromCurrency(fromCurrency)}
                    selectedCurrency={fromCurrency}
                    currencyDisbled={currencyDisabled}
                />
              </div>
           
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              // onClick={swap}
              >Swap</button>
              <div className='w-full mb-1'>
                <InputBox
                label="to"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(toCurrency) => setToCurrency(toCurrency)}
                selectedCurrency={toCurrency}
                amountDisabled
                />
              </div>
            
              <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg' onClick={convertAmount}
            >Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}</button>
          </form>
        </div>
      </div>

    </div>
  
  )
}

export default App