import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [loginMsg, setLoginMsg] = useState('');
    const navigate = useNavigate();
    const loginUser = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch ("https://fullstack-backend-app.onrender.com/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password})
            });
            const data = await response.json();
            if(!response.ok) {
                setLoginMsg(data.error);
                return
            }
            localStorage.setItem("token", data.token)
            localStorage.setItem("userName", data.user.name)
            navigate("/");
            setLoginMsg("Login successful!")
        }
        catch(error) {
            setLoginMsg(error)
        }

    }
    return(
        <>
            <div className="loginMain">
                <div className="loginBox">
                    <img src="src/assets/images/vijay-logo.png" alt="Vijay Kumar Mishra" title="Vijay Kumar Mishra" className="logo" />
                    <form>
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder="Enter your email" />
                        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Please enter your Password" />
                        <button type="submit" className="primiryBtn" onClick={loginUser}>Login</button>
                    </form>
                    <p className="loginLinking">If not have account ? <Link to={'/sign-up'}>Sign Up</Link></p>
                    {loginMsg && <p className="errorMsg">{loginMsg}</p>}
                </div>
            </div>
        </>
    )
}

export default Login;