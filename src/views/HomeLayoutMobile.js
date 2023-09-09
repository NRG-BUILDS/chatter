import Logo from "../components/Logo";
import useFetch from "../useFetch";
import ChatLists from "../components/ChatLists";
import LoadingScreen from "../components/LoadingScreen";
import { Link } from "react-router-dom/cjs/react-router-dom";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { motion } from "framer-motion";

const pageAnimationVariants = {
    initial: {
        x: '-100vw'
    },
    animate: {
        x: 0,
        transition: { type: 'tween' }
    },
    exit: {
        x: '-100vw', 
    }
  }


const HomeLayoutMobile = () => {
    const {data , isPending, error} = useFetch('https://nrg-builds.github.io/chatter/data/data.json')
    const [searchQuery, setSearchQuery] = useState()
    
    return ( 
        <motion.main className="bg-backdrop-offwhite dark:bg-backdrop-darker"
            variants={pageAnimationVariants}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <section className=" bg-backdrop-light dark:bg-backdrop-dark relative">
                <div className="flex justify-between items-center p-4 shadow-lg">
                    <div>
                        <Logo Style={'text-2xl'}/>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <Link to='/profile/me'>
                                <img src={require('../images/avatar/profile.jpg')} alt="" className=" w-12 rounded-full"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <SearchBar handleType={setSearchQuery}/>
            <section className="h-screen overflow-y-auto">
                {/* wait to retrieve data from server */}
                {isPending && <LoadingScreen message={'Getting your messages...'}/>}

                {/* display chat list when data is retrieved */}
                {data && <div className="">
                    <ChatLists data={data.user} searchQuery={searchQuery}/>
                </div>}

                {/* error message */}
                {error && <div className="text-center dark:text-txtColor-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Sorry, an error occured</div>}

                
            </section>
            <div className="hidden fixed top-0 md:flex h-screen w-screen items-center justify-center z-50 bg-backdrop-light dark:bg-backdrop-dark dark:text-txtColor-light">
                    <div className="text-center">
                        <h1 className="text-5xl font-light py-4">
                            You've switched screens
                        </h1>
                        <p>{<Logo Style={'inline'}/>} has detected the you change browser sizes.</p>
                        <a href="/chat/desktop" className="block py-2 px-6 my-6 w-2/4 mx-auto bg-green-500 text-white rounded-md">Open Desktop Layout</a>

                    </div>
            </div>
        </motion.main>
     );
}
 
export default HomeLayoutMobile;