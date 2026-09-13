import {useContext, useRef, useState } from "react";
import DataContext from "../Context/DataContext";
function Users( {onUserAdded } ){
    const [userName, setUserName] = useState('');
    // const [users,setUser] = useState([]);
    const inputRef = useRef(null)
    
    const addUser= async ()=>{
        if(userName.trim()==="")return;
         await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: userName, age: 0, city: "" })
            });
        //     const newUser = await response.json();
        // if (users.includes(userName)) {
        //     alert("Ye naam pehle se list mein hai!");
        //     return;
        // }
        // setUser([...users, userName]);
        setUserName("");
        inputRef.current.focus();
        onUserAdded();
    };
    // const deleteUser = (userIndex) => {
    //     const updateUserData = users.filter((user,index)=>{
    //         return index !== userIndex
    //     })
    //     setUser(updateUserData)
    // }
    const welcomeText = useContext(DataContext)
    return(
        <>
        <div className="form">
            <input ref={inputRef} type="text" value={userName} placeholder="Please user name" 
            onChange={(name)=>setUserName(name.target.value)} />
            <button type="button" onClick={addUser}>Add User</button>
        </div>
        {/* <div className="userBox">
            {
                users.map((user, index)=>(
                    <div className="user" key={index}>
                        <p>Good Morning {user} how i can help you?</p>
                        <button onClick={()=> deleteUser(index)}>Delete User</button>
                    </div>
                ))
            }
        </div> */}
        <p>{welcomeText}</p>
        </>
    )
}

export default Users;