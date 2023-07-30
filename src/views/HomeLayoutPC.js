import ChatLists from "../components/ChatLists";
import useFetch from "../useFetch";
import DMPage from "./DMPage";
import LoadingScreen from "./LoadingScreen";
import Logo from "../components/Logo";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const HomeLayoutPC = () => {
    const {data , isPending, error} = useFetch('http://localhost:8000/users/1')
    const [isAnySelected, setIsAnySelected] = useState(null)
    
    return ( 
        <>
            <section className="grid grid-cols-3">
                <div className="col-span-1">
                    <section >
                        <div className="flex justify-between items-center px-4 py-8 shadow-lg">
                            <div>
                                <h1 className="text-green-500 font-extrabold text-xl">Chatter</h1>
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <span className="material-icons-outlined">search</span>
                                </div>
                                <div>
                                    <Link to='/profile/me'>
                                        <img src={require('../images/avatar/profile.jpg')} alt="" className=" w-12 rounded-full"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        {/* wait to retrieve data from server */}
                        {isPending && <LoadingScreen message={'Getting your messages...'}/>}

                        {/* display chat list when data is retrieved */}
                        {data && (<div>
                            <ChatLists data={data} deviceType={'desktop'} handleClick={setIsAnySelected}/>
                        </div>) }

                        {/* error message */}
                        {error && <div className="text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Sorry, an error occured</div>}
                    </section>
                </div>
                <section className="col-span-2">
                    <DMPage emptyState={!isAnySelected} chatIdProp={isAnySelected}/>
                </section>
                
            </section>
            <div className="sm:block md:hidden fixed top-0  h-screen w-screen items-center justify-center z-50 bg-white">
                    <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
                        <h1 className="text-5xl py-4 font-light">
                            You've switched screens
                        </h1>
                        <p>{<Logo style={'inline'}/>} has detected the you changed browser sizes.</p>
                        <a href="/chat/mobile" className="block py-2 px-6 my-6 w-2/3 mx-auto bg-green-500 text-white rounded-md">Open Mobile Layout</a>

                    </div>
            </div>
            
        </>
     );
}
 
export default HomeLayoutPC;