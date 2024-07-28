import { useState, useCallback, useEffect, useRef } from 'react'
import InputBox from './components/InputBox'
import UseCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [currency, setCurrency] = useState('usd')
  const [currencyDisabled, setCurrencyDisabled] = useState(true)
  const options = Object.keys(UseCurrencyInfo(currency))

  console.log(currency)

  return (

    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
          }}>
           <InputBox 
              label={'Amount'}
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              currencyOptions={options}
              onCurrencyChange={(currency) => setCurrency(currency)}
              selectedCurrency={currency}
              currencyDisbled={currencyDisabled}
          />
          </form>
        </div>
      </div>

    </div>
  
  )
}

export default App