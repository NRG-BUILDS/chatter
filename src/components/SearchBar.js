import { useState } from "react";
import { motion } from "framer-motion";

const SearchBar = ({handleType}) => {
    const [isEmpty, setIsEmpty] = useState(true)
    const func = (e) => {
        if (e.target.value === '' || e.target.value === null) {
            setIsEmpty(true)
            handleType(null)
        } else {
            setIsEmpty(false)
            handleType(e.target.value)
        }
        

    }

    return ( 
        <section className="sticky top-0 flex gap-x-4 pt-6 pb-4 px-3 backdrop-blur z-10">
                <div className="w-full  rounded-2xl overflow-hidden">
                    <input 
                        type="text"
                        onChange={(e) => {func(e)}}
                        placeholder="Search chats..."
                        className="p-4 outline-none w-full bg-backdrop-offwhite dark:bg-backdrop-dark dark:text-txtColor-light" />
                </div>
                <div className="w-1/5 flex items-center justify-center">
                    {isEmpty && <motion.button 
                        variants={buttonVariants}
                        initial='initial'
                        animate='animate'
                        exit="exit"
                        className="bg-primary-normal h-full w-full text-white rounded-2xl material-icons-outlined">chat</motion.button>}
                    {!isEmpty && <motion.button 
                        variants={buttonVariants}
                        initial='initial'
                        animate='animate'
                        exit="exit"
                        className="bg-primary-normal h-full w-full text-white rounded-2xl material-icons-outlined">search</motion.button>}
                </div>
        </section>
     );
}

const buttonVariants = {
    initial: {scale: 0.5},
    animate: {
        scale: 1,
        transition: {type: 'spring', mass:1, stiffness: 200}
    },
    exit: {scale: 0.5}
}
 
export default SearchBar;