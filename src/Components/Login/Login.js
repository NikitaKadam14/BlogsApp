
import { useNavigate } from "react-router-dom";
import Register from "../Register/Register";
import "./Login.css"
import Dashboard from "../Dashboard/Dashboard";
import { useState } from "react";
function Login() {
    const [loginformData, setLoginFormData] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate();
    const loginClick0 = () => {
        console.log("Login button clicked");
        console.log("loginformData:", loginformData);
        navigate("/blogsList")
    }
    const handleEmailChange = (event) => {
        let loginData = { ...loginformData }
        loginData.email = event.target.value;
        setLoginFormData(loginData);
    }
    const handlePasswordChange = (event) => {
        let loginData = { ...loginformData }
        loginData.password = event.target.value;
        setLoginFormData(loginData);

    }
    return (
        <div>
            <div className="section2">
                <div className="head-name">Blogs</div>
                <div>Publish your passions,your way...</div>
                <hr />
                <div className="login">Login</div>
                <div>
                    <label>Email id</label><br />
                    <input className="test" type="text" placeholder="test@gmail.com" id="email" value={loginformData.email} onChange={handleEmailChange} />
                </div>
                <div className="mid">
                    <label>password</label><br />
                    <input className="test-1" type="text" placeholder="test@123" id="password" value={loginformData.password} onChange={handlePasswordChange} />
                </div>
                <button onClick={loginClick0} className="login-button-2">Login</button>
            </div>
        </div>
    );
} export default Login;