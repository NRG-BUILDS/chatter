import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Logo from "../components/Logo";

const Signup = () => {
    // const [username, setUsername] = useState(null)
    // const [useremail, setEmail] = useState(null)
    // const [password, setPassword] = useState(null)
    // const [passwordCheck, setPasswordCheck] = useState(null)
    // const [error, setError] = useState(null)
    // const history = useHistory()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const name = document.getElementById('username')
    //     const email = document.getElementById('email')
    //     const passowrd = document.getElementById('password')
    //     const passowrdCheck = document.getElementById('passwordCheck')
    //     if(name.value === '') {
    //         showError('Username cannot be blank')
    //     } else if (!email.checkValidity || email.value === '') {
    //         showError('Invalid email')
    //     } else if (passowrd.value === '' || passowrdCheck === '') {
    //         setError('Create a strong password')
    //     } else if (password.value != passowrdCheck.value) {
    //         showError('Passowrds don\'t match!')
    //     } else {
    //         console.log(e)
    //         console.log(username + useremail)
    //         // history.push('chat/:username')
    //     }
        
    // }
    // const showError = (message) => {
    //     setError(message)
    // }

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
        <img src={require('../assets/images/more.png')} className="absolute top-0 left-0 w-full h-full object-cover opacity- z-0" alt="" />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="bg-white z-10 relative">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
            <Logo style={'text-4xl'} />
            <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create an Account
            </h2>
            <p className="font-semibold opacity-50">It's about dang time!</p>
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
                    className="block w-full rounded-md outline-none border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
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
                    Create a Strong Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-md outline-none border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                  />
                  {errorCause === 'password' && (<div className=" font- text-red-500">{error}</div>)}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-md outline-none border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
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
                  className="hidden md:flex w-full justify-center rounded-md outline-none bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  onClick={() => {handleSubmit('desktop')}}
                >
                  Sign in
                </button>
                <button
                  type="submit"
                  className="flex md:hidden w-full justify-center rounded-md outline-none bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  onClick={() => {handleSubmit('mobile')}}
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Already on Chatter?
              <a href="/login" className="ml-1 font-semibold leading-6 text-green-600 hover:text-green-500">
                Log in to your account
              </a>
            </p>
          </div>
            </div>
          
        </div>
      </>
     );
}
 
export default Signup;