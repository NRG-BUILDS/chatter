import { useState } from "react";
import { motion } from 'framer-motion'

const InputModal = ({title, handleClick, setOpenModal}) => {
    const [input, setInput] = useState(null)
    return ( 
        <motion.section className="z-50 fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-25 flex items-center justify-center"
            animate={{opacity: 1}}
        >
            <motion.div className="\ max-w-lg bg-backdrop-light dark:bg-backdrop-dark rounded-3xl p-4"
                initial={{y: '100vh'}}
                animate={{y: 0}}
            >
                <h1 className="text-3xl pb-4 text-primary-normal">{title}</h1>
                <textarea 
                    name="input" id="" cols="30" rows="8" className="rounded-2xl bg-gray-50 dark:bg-backdrop-darker border dark:border-0 dark:text-txtColor-light p-4"
                    onChange={(e) => {setInput(e.target.value)}}></textarea>
                <div className="my-4 text-center">
                    <button 
                        onClick={() => {
                            handleClick(input)
                            setOpenModal(false)
                        }}
                        className="bg-black text-white px-4 py-2 rounded-3xl w-full">Confirm</button>
                    <button 
                        className="font-bold opacity-80 pt-3 hover:text-red-600"
                        onClick={() => {setOpenModal(false)}}>
                        Cancel
                    </button>
                </div>
                
            </motion.div>
        </motion.section>
     );
}
 
export default InputModal;