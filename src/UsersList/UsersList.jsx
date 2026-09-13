import { useContext, useEffect, useState } from "react"
import Users from "../Users/Users";
import { Link } from "react-router-dom";

function UsersList(){
    // const [usersDetails, setUsersDetails] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const fetchUsers = async ()=> {
    //         try {
    //             const apiResponse = await fetch("http://localhost:3000/users");
    //             const fetchData = await apiResponse.json();
    //             setUsersDetails(fetchData)
    //         }
    //         catch(error) {
    //             console.log("Some have api issue plz wait", error)
    //         }
    //         finally{
    //             setLoading(false);
    //         }
    //     }
    // useEffect(()=>{
    //     fetchUsers();
    // }, [])
    const [usersDetails, setUsersDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const apiResponse = await fetch("http://localhost:3000/users");
      const fetchData = await apiResponse.json();
      setUsersDetails(fetchData);
    } catch (error) {
      console.log("Some have api issue plz wait", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  
  const deleteUse = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
    })
    fetchUsers(); 
  }
    if(loading) {
        return <p>Please wait we are on the way.</p>
    }
    return(
        <>
        <Users onUserAdded={fetchUsers}></Users>
            <div className="allUsers">
                {
                    usersDetails.map((user)=> (
                        <div className="singleUser" key={user._id}>
                            <Link to={`/user-list/${user._id}`}>
                                <p>{user.name}</p>
                            </Link>
                            <button type="button" onClick={()=> deleteUse(user._id)}>Delete User</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default UsersList;