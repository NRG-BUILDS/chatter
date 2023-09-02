import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import InputModal from "../components/InputModal";

const Profile = () => {
    const { user } = useParams()
    const [isMe, setIsMe] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [bio, setBio] = useState('Nothing to see here... yet')
    useEffect(()=> {
        if (user === 'me') {
            setIsMe(true)
        } else {
            setIsMe(false)
        }
    })
    console.log(user)
    const lastSeen = "Fri, Jul 28"
    return ( 
        <section className='h-screen w-screen bg-gray-100'>
            <div className='max-w-2xl px-2 mx-auto my-2 '>
                <div className="text-center mb-2 shadow-md bg-white rounded-xl">
                    <div className='py-4'>
                        <img src={require('../images/avatar/profile.jpg')} alt="" className='rounded-full w-48 mx-auto'/>
                    </div>
                    <div>
                        <h2 className="text-semibold text-2xl">{user}</h2>
                        <p className='text-xl my-2 tracking-wide opacity-60'>+2349079711780</p>
                    </div>
                    {isMe && <ProfileActions settings={true} editBio={true} setOpenModal={setOpenModal}/>}
                    {!isMe && <ProfileActions message={true} audio={true} video={true}/>}
                </div>

                <div className="shadow-md px-4 py-5 bg-white rounded-xl">
                    <span className="opacity-50 font-semibold">Bio</span>
                    <p className="py-3">{bio}</p>
                    <span><span className="opacity-50 font-semibold">Last seen: </span>{lastSeen}</span>
                </div>
                {isMe && <LogOutBtn />}
                {!isMe && <BlockBtn />}
            </div>
            
        {openModal && <InputModal title={'Edit Bio'} handleClick={setBio} setOpenModal={setOpenModal}/>}
        </section>
     );
}
 
export default Profile;



const ProfileActions = ({message = false, audio = false, video = false, settings = false, editBio = false, setOpenModal}) => {
    return ( 
        <div className="flex font-bold items-center justify-center my-4 w-4/5 mx-auto">
            {message && <div className="grid text-green-500 w-1/3 py-4">
                <span className="material-icons-outlined text-xl">chat</span>
                <span>Message</span>
            </div>}
            {audio && <div className="grid text-green-500 w-1/3 py-4">
                <span className="material-icons-outlined text-xl">call</span>
                <span>Audio</span>
            </div>}
            {video && <div className="grid text-green-500 w-1/3 py-4">
                <span className="material-icons-outlined text-xl">videocam</span>
                <span>Video</span>
            </div>}
            {settings && <div className="grid text-green-500 w-1/3 py-4">
                <span className="material-icons-outlined text-xl">settings</span>
                <span>Settings</span>
            </div>}
            {editBio && <div className="text-green-500 w-1/3 py-4">
                <button
                    className="grid"
                    onClick={() => {setOpenModal(true)}}>
                        <span className="material-icons-outlined text-xl">edit</span>
                        <span>Edit Bio</span>
                </button>
                
            </div>}
        </div>
     );
}
const LogOutBtn = () => {
    return ( 
        <Link to='/'>
            <div className="shadow-md mt-8 px-4 py-5 bg-red-500 text-white rounded-xl text-center leading-6 font-semibold">
                <h2>Log Out</h2>
            </div>
        </Link>
     );
}
const BlockBtn = () => {
    return ( 
        <Link to='/'>
            <div className="shadow-md mt-8 px-4 py-5 bg-red-500 text-white rounded-xl text-center leading-6 font-semibold">
                <h2>Block</h2>
            </div>
        </Link>
     );
}