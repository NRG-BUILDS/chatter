import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState(null)
    const [useremail, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordCheck, setPasswordCheck] = useState(null)
    const [error, setError] = useState(null)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = document.getElementById('username')
        const email = document.getElementById('email')
        const passowrd = document.getElementById('password')
        const passowrdCheck = document.getElementById('passwordCheck')
        if(name.value === '') {
            showError('Username cannot be blank')
        } else if (!email.checkValidity || email.value === '') {
            showError('Invalid email')
        } else if (passowrd.value === '' || passowrdCheck === '') {
            setError('Create a strong password')
        } else if (password.value != passowrdCheck.value) {
            showError('Passowrds don\'t match!')
        } else {
            console.log(e)
            console.log(username + useremail)
            // history.push('chat/:username')
        }
        
    }
    const showError = (message) => {
        setError(message)
    }

    return ( 
        <section className="h-screen w-screen flex justify-center items-center bg-slate-300">
            <div className=" w-80 bg-white px-4 py-12 rounded-xl text-center">
                <h2 className="font-semibold">Create an account on</h2>
                <h1 className="text-green-500 font-extrabold text-3xl">
                    Chatter
                </h1>

                <div className="text-left mt-10">
                    <form onSubmit={(e) =>{ handleSubmit(e)}}>
                        <div className="my-4">
                            <label htmlFor="username" className="block">Your Username</label>
                                <input 
                                    type="text"
                                    name="username" 
                                    id="username" 
                                    className="border w-full py-2 rounded-lg duration-150 hover:border-green-500"
                                    onChange={(e) => {
                                        setUsername(e.target.value)
                                    }} />
                        </div>
                        <div className="my-4">
                            <label htmlFor="email" className="block">Email</label>
                                <input 
                                    type="email"
                                    name="email" 
                                    id="email" 
                                    className="border w-full py-2 rounded-lg duration-150 hover:border-green-500"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />
                        </div>
                        <div className="my-4">
                            <label htmlFor="password" className="block">Password</label>
                                <input 
                                    type="text"
                                    name="password" 
                                    id="password" 
                                    className="border w-full py-2 rounded-lg duration-150 hover:border-green-500"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                        </div>
                        <div className="my-4">
                            <label htmlFor="password" className="block">Confirm Password</label>
                                <input 
                                    type="password"
                                    name="passwordCheck" 
                                    id="passwordCheck" 
                                    className="border w-full py-2 rounded-lg duration-150 hover:border-green-500"
                                    onChange={(e) => {
                                        setPasswordCheck(e.target.value)
                                    }} />
                        </div>
                        <div className="mt-5 text-center">
                            <input type="submit" className="bg-black text-white py-2 w-3/5 rounded-xl hover:bg-green-500" value={'Sign Up'} />
                            {error && (<p>{error}</p>)}
                        </div>
                    </form>    
                </div>
            </div>       
        </section>
     );
}
 
export default Signup;