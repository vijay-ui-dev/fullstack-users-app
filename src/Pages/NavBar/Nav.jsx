import { Link } from "react-router-dom";

function Nav() {
    return(
        <>
            <div className="navSection">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/user-list">Users List</Link>
            </div>
        </>
    )
}

export default Nav;