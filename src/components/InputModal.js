import { useState } from "react";

const InputModal = ({title, handleClick, setOpenModal}) => {
    const [input, setInput] = useState(null)
    return ( 
        <section className="z-50 fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-25">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg bg-white rounded-3xl p-4">
                <h1 className="text-3xl pb-4 text-green-700">{title}</h1>
                <textarea 
                    name="input" id="" cols="30" rows="8" className="rounded-2xl bg-gray-100 border p-4"
                    onChange={(e) => {setInput(e.target.value)}}></textarea>
                <div className="my-4">
                    <button 
                        onClick={() => {
                            handleClick(input)
                            setOpenModal(false)
                        }}
                        className="bg-black text-white px-4 py-2 rounded-2xl w-full">Confirm</button>
                </div>
                
            </div>
        </section>
     );
}
 
export default InputModal;