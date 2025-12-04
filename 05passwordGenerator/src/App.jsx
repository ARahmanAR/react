import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(12)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [uppercaseAllowed, setUppercaseAllowed] = useState(true)
  const [lowercaseAllowed, setLowercaseAllowed] = useState(true)
  const [password, setPassword] = useState('')

  // useRef hook
  const passwordRef = useRef(null)

  useEffect(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) {
      str += '0123456789'
    }
    if (characterAllowed) {
      str += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    }
    if (uppercaseAllowed && !lowercaseAllowed) {
      str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + (numberAllowed ? '0123456789' : '') + (characterAllowed ? '!@#$%^&*()_+~`|}{[]:;?><,./-=' : '')
    }
    if (!uppercaseAllowed && lowercaseAllowed) {
      str = 'abcdefghijklmnopqrstuvwxyz' + (numberAllowed ? '0123456789' : '') + (characterAllowed ? '!@#$%^&*()_+~`|}{[]:;?><,./-=' : '')
    }
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char - 1)
    }
    // eslint-disable-next-line
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, uppercaseAllowed, lowercaseAllowed])

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) {
      str += '0123456789'
    }
    if (characterAllowed) {
      str += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    }
    if (uppercaseAllowed && !lowercaseAllowed) {
      str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + (numberAllowed ? '0123456789' : '') + (characterAllowed ? '!@#$%^&*()_+~`|}{[]:;?><,./-=' : '')
    }
    if (!uppercaseAllowed && lowercaseAllowed) {
      str = 'abcdefghijklmnopqrstuvwxyz' + (numberAllowed ? '0123456789' : '') + (characterAllowed ? '!@#$%^&*()_+~`|}{[]:;?><,./-=' : '')
    }
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char - 1)
    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, uppercaseAllowed, lowercaseAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0, passwordRef.current.value.length) 
      navigator.clipboard.writeText(passwordRef.current.value)
      alert('Password copied to clipboard!')
    }
  }, [passwordRef])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-full rounded-lg p-6 my-8 text-orange-500 bg-purple-950'>
        <h1 className='text-3xl text-purple-100 font-bold text-center py-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-yellow-100 text-black'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='copy-btn' aria-label='Copy password'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min="4"
              max="32"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='cursor-pointer'
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex flex-col gap-y-1 ml-auto text-right'>
            <input
              type="checkbox"
              id="numberAllowed"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
            />
            <label htmlFor="numberAllowed">Include Numbers</label>
            <input
              type="checkbox"
              id="characterAllowed"
              checked={characterAllowed}
              onChange={(e) => setCharacterAllowed(e.target.checked)}
            />
            <label htmlFor="characterAllowed">Include Special Characters</label>
            <input
              type="checkbox"
              id="uppercaseAllowed"
              checked={uppercaseAllowed}
              onChange={(e) => setUppercaseAllowed(e.target.checked)}
            />
            <label htmlFor="uppercaseAllowed">Include Uppercase Letters</label>
            <input
              type="checkbox"
              id="lowercaseAllowed"
              checked={lowercaseAllowed}
              onChange={(e) => setLowercaseAllowed(e.target.checked)}
            />
            <label htmlFor="lowercaseAllowed">Include Lowercase Letters</label>
          </div>
        </div>
        <div className='mt-4'>
          <div className='flex justify-center'>
            <button
              onClick={generatePassword}
              className='bg-orange-500 text-purple-100 px-4 py-2 rounded hover:bg-orange-600 transition-colors'
            >
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
