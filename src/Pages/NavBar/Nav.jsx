import { Link, useNavigate } from "react-router-dom";


function Nav() {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
    const navigate = useNavigate();
    
    console.log(userName)
    const userLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }
    return(
        <>
            <div className="navSection">
                { token ? (
                    <>  <div className="logoImg">
                            <img src="./src/assets/images/vijay-logo.png" title="Vijay Kumar Mishra" alt="Vijay Kumar Mishra" />
                        </div>
                        <div className="navRow">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/user-list">Users List</Link>
                            <Link to="/ask-question">Ask Question</Link>
                            <span>{userName}</span><button type="buton"className="nrmlBtn" onClick={userLogout}>Logout</button>
                        </div>
                    </>
                ) :  (
                    <Link to="/login">Login</Link>
                )

                }
                
            </div>
        </>
    )
}

export default Nav;