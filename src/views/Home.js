import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <section className="w-screen h-screen flex justify-center items-center">
            <img src={require('../assets/images/color_doodle.png')} className="absolute top-0 left-0 w-full h-full object-cover -z-10" alt="" />

            <div className="px-6">
                <h3 className="text-3xl font-semibold z-10 relative">
                    Welcome To
                </h3>
                <h1 className="font-extrabold text-7xl text-green-500">
                    Chatter
                </h1>
                <p className="font-extralight">...a bold and expressive new way to communicate</p>

                <div className="grid md:grid-cols-2 mt-10">
                    <Link to='/signup' className="text-center px-6 py-2 border-2 border-green-500 bg-green-500 text-white w-full block my-1 rounded-xl">Sign Up</Link>
                    <Link to='/login' className="text-center px-6 py-2 border-2 border-green-500 w-full block my-1 rounded-xl">Log In</Link>
                </div>
            </div>

        </section>
     );
}
 
export default Home;