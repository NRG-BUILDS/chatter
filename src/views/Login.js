import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Logo from "../components/Logo";


export default function Login() {
    const [email, setEmail] = useState(null)
    const [passowrd, setPassword] = useState(null)
    const [error, setError] = useState(null)
    const [errorCause, setErrorCause] = useState(null)
    const history = useHistory()

    const handleSubmit = (device) => {
        const email = document.getElementById('email')
        const passowrd = document.getElementById('password')
        if(email.value === '') {
            showError('Email cannot be blank', 'email')
        } else if (passowrd.value === '') {
            setError('Type in a correct password', 'password')
        } else {
            history.push(`/chat/${device}`)
        }
        
    }
    const showError = (message, from) => {
        
        setError(message)
        setErrorCause(from)
    }


    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
            <Logo Style={'text-4xl'} />
            <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                  />
                  {errorCause === 'email' && (<div className=" font- text-red-500">{error}</div>)}
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-green-600 hover:text-green-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                  />
                  {errorCause === 'password' && (<div className=" font- text-red-500">{error}</div>)}
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="hidden md:flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  onClick={() => {handleSubmit('desktop')}}
                >
                  Sign in
                </button>
                <button
                  type="submit"
                  className="flex md:hidden w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  onClick={() => {handleSubmit('mobile')}}
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="/signup" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                Create a free account now
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }