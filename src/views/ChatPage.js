import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import HomeLayoutPC from "./HomeLayoutPC";
import HomeLayoutMobile from "./HomeLayoutMobile";

const ChatPage = () => {
    const { deviceScreen } = useParams()
    const [isDesktop, setIsDesktop] = useState(false)
    useEffect(() => {
        if (deviceScreen === 'desktop') {
            setIsDesktop(true)
        }
    }, [])
    
    return ( 
        <main className=" dark:bg-slate-950">
            {isDesktop && (<HomeLayoutPC />)}
            {!isDesktop && (<HomeLayoutMobile />)}
        </main>
     );
}
 
export default ChatPage;