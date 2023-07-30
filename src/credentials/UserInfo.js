import { useState } from "react";

const UserInfo = () => {
    const [username, setUsername] = useState(null)
    const [userEmail, setUserEmail] = useState(null)

    return {username, setUsername, userEmail, setUserEmail}
}
 
export default UserInfo;