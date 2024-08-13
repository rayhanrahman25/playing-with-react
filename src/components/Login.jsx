import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const loginUser = (e) => {
        e.preventDefault();
        setUser({userName, password})
    }
  return (
    <div className="bg-gray-700 flex justify-center items-center h-screen font-pop">
        <div 
            className="bg-white rounded-xl flex flex-col justify-between p-5" 
            style={{ height: '600px', width: '350px' }} 
        >
            <div className="flex flex-col gap-3 p-2">
                <h3 className="text-center text-gray-700 text-3xl font-bold py-5">Login</h3>
                <input 
                    className="w-full bg-gray-200 rounded-full p-2 pl-5 my-2" 
                    type="text"
                    value={userName}
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input 
                    className="w-full bg-gray-200 rounded-full p-2 pl-5" 
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                    <button onClick={loginUser} className="w-full rounded-full text-xl font-semibold text-red-50 mt-3 py-2 bg-gradient-to-r from-yellow-400 to-red-400 hover:shadow-md">
                        LOG IN
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
