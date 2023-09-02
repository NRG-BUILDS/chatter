import { useState } from "react";

const SearchBar = ({handleType}) => {
    const [isEmpty, setIsEmpty] = useState(true)
    const func = (e) => {
        if (e.target.value === '' || e.target.value === null) {
            setIsEmpty(true)
            handleType(null)
        } else {
            setIsEmpty(false)
            handleType(e.target.value)
        }
        

    }

    return ( 
        <section className="sticky top-0 flex gap-x-4 pt-6 pb-4 px-3 backdrop-blur z-10">
                <div className="w-full bg-white rounded-2xl overflow-hidden">
                    <input 
                        type="text"
                        onChange={(e) => {func(e)}}
                        placeholder="Search chats..."
                        className="p-4 outline-none w-full" />
                </div>
                <div className="bg-green-500 text-white rounded-2xl flex items-center justify-center w-1/5">
                    {isEmpty && <button className="material-icons-outlined">chat</button>}
                    {!isEmpty && <button className="material-icons-outlined">search</button>}
                </div>
        </section>
     );
}
 
export default SearchBar;