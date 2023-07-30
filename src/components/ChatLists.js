import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const ChatLists = ({data, deviceType, handleClick}) => {
    const [isDesktop, setIsDesktop] = useState(false)
    useEffect(() =>{
        if (deviceType === 'desktop') {
            setIsDesktop(true)
        }
    })
    
    const chats = data.contacts
    console.log(data)

    return ( 
        <>
        {/* tapping on this takes user to a different screen (dm page) */}
        {/* this functionality only works on mobile view */}

        {!isDesktop && chats.map((user) => (
            <Link to={`/message/${user.name}`} key={user.id}>
                <div className="w-full py-4 flex gap-4 border-b border-gray-200 hover:bg-green-100">
                    <div>
                        <img src={require('../images/avatar/profile.jpg')} alt="" className='rounded-full w-14' />
                    </div>
                    <div className='h-14 w-4/5 overflow-hidden'>
                        <h1 className='font-bold mb-2'>{user.name}</h1>
                        <p className='text-ellipsis opacity-70 overflow-hidden whitespace-nowrap '>Loren ipsum et ammet de la caster isnie the real way to talk to people is with Chatter</p>
                    </div>
                </div>
            </Link>
            
        ))}


        {/* tapping on displays the chat on the side (dm page) */}
        {/* this functionality only works on DESKTOP view */}

        {isDesktop && chats.map((user) => (
            <button 
            key={user.id}
            onClick={() => {
                handleClick(user.name)
            }}>
                <div className="w-full py-6 px-2 flex items-center text-left gap-4 border-b border-gray-300 hover:bg-green-50">
                    <div>
                        <img src={require('../images/avatar/profile.jpg')} alt="" className='rounded-full w-16' />
                    </div>
                    <div className='h-14 w-2/5 text-left overflow-hidden'>
                        <h1 className='font-bold mb-2'>{user.name}</h1>
                        <p className='text-ellipsis overflow-hidden whitespace-nowrap '>Loren ipsum et ammet de la caster isnie the real way to talk to people is with Chatter</p>
                    </div>
                </div>
            </button>
            
        ))}
        </>
     );
}
 
export default ChatLists;