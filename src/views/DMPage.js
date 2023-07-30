import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const DMPage = ({chatIdProp, emptyState}) => {
    const { id } = useParams()
    const [chatId, setChatId] = useState(id)
    const history = useHistory()

    useEffect(() => {
        if(!emptyState && !chatId) {
            
                console.log(chatIdProp);
                setChatId(chatIdProp);
        }
       chatIdProp && setChatId(chatIdProp)
    }, [chatIdProp])
    
   console.log(chatId)

    
    // tracks text message being typed out
    const [text, setText] = useState(null)

    //array containing previous messages conversations
    const [messageLog, setMessageLog] = useState([
        {message: "Hey you!?", fromMe: false, id: 1},
        {message: "Hey you! Just joining Chatter?", fromMe: false, id: 1},
        {message: "Yo Danny!", fromMe: true, id: 1},
        {message: "I can't believe it took this long either", fromMe: true, id: 1},
    ])

    //refresh the DM page after a new message is sent
    const [refresh, setRefresh] = useState(false)

    const handleSend = () => {
        const textBox = document.querySelector('.textBox')
        if (!text || text === "" || text ===" ") {
            console.log('empty')
        } else {
            messageLog.push({
                message: text,
                fromMe: true,
                id: 4
            })
            setMessageLog(messageLog)
            if(refresh) {
                setRefresh(false)
            } else {
                setRefresh(true)
            } 
            textBox.value = ""
        }
        
    }

    return ( 
        
        <section className="relative h-screen">
            <img src={require('../assets/images/doodle_bg.png')} alt="" className="-z-10 absolute top-0 left-0 w-full h-full object-cover opacity-20"/>
        {!emptyState && (<div>
                    <div className="flex justify-between items-center px-4 py-4 shadow-lg bg-white">
                        <div className="flex items-center gap-1.5">
                            <button onClick={() => {history.go(-1)}}>
                                <span className="flex md:hidden material-icons-outlined opacity-70">arrow_back_ios_new</span>
                            </button>
                            <h2 className="font-extrabold">{chatId}</h2>
                        </div>
                        <div>
                            <span className="material-icons-outlined">more_vert</span>
                        </div>
                    </div>
                    <div className="py-4 px-2">
                        {messageLog.map((msgItem) => { 
                            if(msgItem.fromMe) {
                                return (
                                    <div className="myMessage">
                                        <div className="rounded-full w-10 h-10 overflow-hidden">
                                            <img src={require("../images/avatar/profile.jpg")} alt="" />
                                        </div>
                                        <div className="grid justify-items-end">
                                            <div className="bubble px-4 py-2 rounded-3xl">
                                                <p className="break-words">{msgItem.message}</p>
                                                 
                                            </div>
                                        
                                        </div>
                                        
                                    </div>
                                )
                            }
                            return (
                                <div className="otherMessage">
                                    <div className="rounded-full w-10 h-10 overflow-hidden">
                                        <img src={require("../images/avatar/profile.jpg")} alt="" />
                                    </div>
                                    <div className="grid justify-items-start">
                                        <div className="bubble px-4 py-2 rounded-3xl">
                                            <p className="break-words">{msgItem.message}</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                    <div className="absolute flex bottom-0 left-0 w-full  py-2 px-4">
                        <div className="w-full mr-2">
                            <input type="text" 
                            placeholder="Type a message..."
                            onChange={(e) => { setText(e.target.value)}}
                            className="textBox rounded-xl bg-gray-300 duration-75 focus:bg-white outline-none py-2 px-4 w-full" />
                        </div>  
                        <div>
                            <button 
                                onClick={() => {handleSend()}}
                                className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center text-white">
                                <span className="material-icons-outlined">send</span>
                            </button>
                        </div>
                    </div>
            
            </div>)}
        {emptyState && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-4xl font-light">Select a chat to get started</h1>
            </div>
        )}
        </section>
     );
}
 
export default DMPage;