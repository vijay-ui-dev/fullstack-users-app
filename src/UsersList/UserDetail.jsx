import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetail(){
    const {id = `${user.name}`} = useParams();
    const [user, setUser] = useState(null);
    const [editName, setEditName] =useState("");
    const fetchUser = async ()=> {
            const response = await fetch(`https://fullstack-backend-app.onrender.com/users/${id}`,{
            });
            const data = await response.json();
            setUser(data);
            setEditName(data.name);

        };

    useEffect(()=> {
        fetchUser();
    }, [id])

    const updateUser = async() => {
        const response = await fetch(`https://fullstack-backend-app.onrender.com/users/${id}`, {
            method:"PUT",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify({ name: editName})
        })
       const updateUser = await response.json();
       setUser(updateUser) ;
    }


    if (!user) return <p>Loading...</p>;
    return(
        <>
            <div>
                <h2>{user?.name}</h2>
                <p>Age: {user?.age}</p>
                <p>City: {user?.city}</p>
                <input
                type="text"
                value={editName}
                onChange={(e)=> setEditName(e.target.value) } />
                <button type="button" onClick={updateUser}>Update Name</button>
            </div>
        </>
    )
}

export default UserDetail;