import Logo from "../components/Logo";
import useFetch from "../useFetch";
import ChatLists from "../components/ChatLists";
import LoadingScreen from "./LoadingScreen";
import { Link } from "react-router-dom/cjs/react-router-dom";

const HomeLayoutMobile = () => {
    const {data , isPending, error} = useFetch('https://nrg-builds.github.io/chatter/data/data.json')

    return ( 
        <main>
            <section>
                <div className="flex justify-between items-center px-4 py-5 shadow-lg">
                    <div>
                        <Logo style={'text-2xl'}/>
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
                {data && <div className="px-4">
                    <ChatLists data={data}/>
                </div>}

                {/* error message */}
                {error && <div className="text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Sorry, an error occured</div>}

                
            </section>
            <div className="hidden fixed top-0 md:flex h-screen w-screen items-center justify-center z-50 bg-white">
                    <div className="text-center">
                        <h1 className="text-5xl font-light py-4">
                            You've switched screens
                        </h1>
                        <p>{<Logo style={'inline'}/>} has detected the you change browser sizes.</p>
                        <a href="/chat/desktop" className="block py-2 px-6 my-6 w-2/4 mx-auto bg-green-500 text-white rounded-md">Open Desktop Layout</a>

                    </div>
            </div>
        </main>
     );
}
 
export default HomeLayoutMobile;
