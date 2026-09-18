import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupMsg, setSignupMsg] = useState('');
    const navigate = useNavigate();
    const signUpUser = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://fullstack-backend-app.onrender.com/signup", {
                method:"POST",
                headers: {"Content-Type" : "application/json"},
                body : JSON.stringify({name, email,password})
            })
            const data = await response.json();
            if(!response.ok) {
                setSignupMsg(data.error);
                return;
            }
            setSignupMsg = "Signup successful! Ab login karo.";
            navigate("/login")
        }
        catch(error) {
            signupMsg(error);
        }
    }

    return(
        <>
            <div className="loginMain">
                <div className="loginBox">
                    <img src="src/assets/images/vijay-logo.png" alt="Vijay Kumar Mishra" title="Vijay Kumar Mishra" className="logo" />
                    <form>
                        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}  placeholder="Enter your name" />
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder="Enter your email" />
                        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Please enter your Password" />
                        <button type="submit" className="primiryBtn" onClick={signUpUser}>Sign Up</button>
                    </form>
                    {signupMsg && <p className="errorMsg">{setSignupMsg}</p>}

                    <p className="loginLinking">If have account ? <Link to={'/login'}>Login</Link></p>
                </div>
            </div>
        </>
    )
}

export default SignUp;