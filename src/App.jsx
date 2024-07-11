import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passRef = useRef('');

  const copyToClipBoard = () => {
      window.navigator.clipboard.writeText(password)
      passRef.current?.select()
  }

  const generatePassword = useCallback(() => {
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numbers = '0123456789'
    let char = '!@#$%^&*()_+'
    if(numberAllowed) letters += numbers
    if(charAllowed) letters += char

    let pass = ''
    for(let i = 0; i < length; i++) {
      const randomIndex = Math.floor( Math.random() *  letters.length )
      pass += letters[randomIndex];
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed]);

  useEffect(()=>{
    // copyToClipBoard()
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        ref={passRef}
        type="text"
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        value={password}
        readOnly
        />
        <button onClick={copyToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >copy</button>
      </div>
      <div
      className='flex text-sm gap-x-2'
      >
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name="" 
          id=""
           />
           <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
           name=""
          id="" />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
           name=""
          id="" />
          <label htmlFor="charInput">Character</label>
        </div>
        
      </div>
    </div>
  )
}

export default App