import { useEffect, useState } from "react";

const Settings = () => {
    const [theme, setTheme] = useState(false)

    useEffect(() => {
        checkCurrentSettings()
    }, [])

    const checkCurrentSettings = () => {
        if (document.body.classList.contains('dark')) {
            setTheme(true)
        }
    }
    const updateSettings = () => {
        console.log(theme)
        if(!theme) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }
    return ( 
        <section className="bg-backdrop-offwhite dark:text-txtColor-light dark:bg-backdrop-darker">
            <div className="max-w-lg mx-auto p-4">
                <div className="pb-4">
                    <h1 className="text-3xl">Settings</h1>
                </div>
                <div>
                    <SettingTile 
                        name={"Dark mode"} 
                        handleToggle={setTheme}
                        handleClick={updateSettings}
                        toggleState={false}
                        />
                </div>
            </div>
        </section>
     );
}
 
export default Settings;

const Toggle = ({handleToggle, handleClick, toggleState}) => {
    return ( 
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox"  
                className="sr-only peer" 
                onClick={(e) => {
                    handleToggle(e.nativeEvent.srcElement.checked)
                    handleClick()
                }}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-light dark:peer-focus:ring-primary-normal dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-normal"></div>
        </label>
     );
}

const SettingTile = ({name, handleToggle, handleClick, toggleState}) => {
    return <div className="flex justify-between items-center">
        <div className="font-medium text-gray-900 dark:text-gray-300">
            <span>{name}</span>
        </div>
        <div>
            <Toggle handleToggle={handleToggle} handleClick={handleClick} toggleState={toggleState}/>
        </div>
    </div>;
}
