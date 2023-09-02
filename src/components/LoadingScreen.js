import Logo from "./Logo";

const LoadingScreen = ({message}) => {
    return ( 
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
            <div className="loadAnimation">
                {<Logo Style={'text-4xl'}/>}
            </div>
            <div className="animate-pulse">{message}</div>
            
        </div>
     );
}
 
export default LoadingScreen;