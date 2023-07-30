import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
const Profile = () => {
    const { user } = useParams()
    console.log(user)
    const bio = "Lorem isonum et ammet ctre tip shr a gionwrik fkbwri f ei"
    const lastSeen = "Fri, Jul 28"
    return ( 
        <section className='h-screen w-screen bg-gray-200'>
            <div className='max-w-2xl px-2 mx-auto my-2 '>
                <div className="text-center mb-2 shadow-md bg-white rounded-xl">
                    <div className='py-4'>
                        <img src={require('../images/avatar/profile.jpg')} alt="" className='rounded-full w-48 mx-auto'/>
                    </div>
                    <div>
                        <h2 className="text-semibold text-2xl">{user}</h2>
                        <p className='text-xl my-2 tracking-wide opacity-60'>+2349079711780</p>
                    </div>
                    <div className="flex font-bold items-center justify-center my-4 w-4/5 mx-auto">
                        <div className="grid text-green-500 w-1/3 py-4">
                            <span className="material-icons-outlined text-xl">chat</span>
                            <span>Message</span>
                        </div>
                        <div className="grid text-green-500 w-1/3 py-4">
                            <span className="material-icons-outlined text-xl">call</span>
                            <span>Audio</span>
                        </div>
                        <div className="grid text-green-500 w-1/3 py-4">
                            <span className="material-icons-outlined text-xl">videocam</span>
                            <span>Video</span>
                        </div>
                    </div>
                </div>

                <div className="shadow-md px-4 py-5 bg-white rounded-xl">
                    <p>{bio}</p>
                    <span><span className="opacity-60 font-semibold">Last seen: </span>{lastSeen}</span>
                </div>
                <Link to='/'>
                    <div className="shadow-md mt-8 px-4 py-5 bg-red-500 text-white rounded-xl text-center leading-6 font-semibold">
                        <h2>Log Out</h2>
                    </div>
                </Link>
            </div>
            

        </section>
     );
}
 
export default Profile;