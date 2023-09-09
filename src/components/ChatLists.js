import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const ChatLists = ({data, deviceType, handleClick, searchQuery}) => {
    const [isDesktop, setIsDesktop] = useState(false)
    useEffect(() =>{
        if (deviceType === 'desktop') {
            setIsDesktop(true)
        }
    }, [])
    
    const chats = data.contacts
    console.log(data)

    return ( 
        <>
        {/* tapping on this takes user to a different screen (dm page) */}
        {/* this functionality only works on mobile view */}

        {!isDesktop && chats.map((user) => (
            <Link to={`/message/${user.name}`} key={user.id}>
                <div className="p-3 mt-4 mx-2 flex items-center gap-4 bg-backdrop-light dark:bg-backdrop-dark text-txtColor-dark dark:text-txtColor-light dark:hover:text-txtColor-dark rounded-3xl border-gray-200 hover:bg-green-100">
                    <Link to={`/profile/${user.name}`}>
                        <div>
                            <img src={require('../images/avatar/profile.jpg')} alt="" className='rounded-full w-20' />
                        </div>
                    </Link>
                    
                    <div className='h-14 w-4/5 overflow-hidden'>
                        <h1 className='font-semibold text-lg'>{user.name}</h1>
                        <p className='text-ellipsis opacity-70 overflow-hidden whitespace-nowrap '>Loren ipsum et ammet de la caster isnie the real way to talk to people is with Chatter</p>
                    </div>
                    <div className='text-sm'>
                        <div className="opacity-50">25/08/23</div>
                        <div className="text-center">
                            <span className='inline-block w-9 bg-primary-normal text-white rounded-full '>99</span>
                        </div>
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
                <div className="py-6 px-2 m-4 flex items-center text-left gap-4 bg-backdrop-light dark:bg-backdrop-dark rounded-3xl dark:text-txtColor-light dark:hover:text-txtColor-dark border-gray-300 hover:bg-green-50">
                    <Link to={`/profile/${user.name}`}>
                        <div>
                            <img src={require('../images/avatar/profile.jpg')} alt="" className='rounded-full w-16' />
                        </div>
                    </Link>
                    
                    <div className='h-14 w-2/5 text-left overflow-hidden'>
                        <h1 className='font-semibold mb-2'>{user.name}</h1>
                        <p className='text-ellipsis overflow-hidden  '>Loren ipsum et ammet de la caster isnie the real way to talk to people is with Chatter</p>
                    </div>
                    <div className='text-sm'>
                        <div className="opacity-50">25/08/23</div>
                        <div className="text-center">
                            <span className='inline-block w-9 bg-primary-normal text-white rounded-full '>99+</span>
                        </div>
                    </div>
                </div>
            </button>
            
        ))}
        </>
     );
}
 
export default ChatLists;