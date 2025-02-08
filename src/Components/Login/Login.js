
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
    const [error, setError] = useState({
        email: "",
        password: "",

    })
    const navigate = useNavigate();
    const loginClick0 = () => {
        let errorMessage = { email: "", password: "", general: "" };
        if (loginformData.email === "" && loginformData.password === "") {
            errorMessage.general = "Please enter valid fields";
        }
        else if (loginformData.email === "" && loginformData.password !== "") {
            errorMessage.email = "Please enter a valid email";
        }
        else if (loginformData.email !== "" && loginformData.password === "") {
            errorMessage.password = "Please enter a valid password";
        }
        else {
            navigate("/blogslist")
        }
        setError(errorMessage);
        console.log("Login button clicked");
        console.log("loginformData:", loginformData);
        // navigate("/blogsList")
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
    const isFormValid=loginformData.email&&loginformData.password && !(error.email ||error.password); 
    return (
        <div>
            <div className="section2">
                <div className="head-name">Blogs</div>
                <div>Publish your passions,your way...</div>
                <hr />
                <div className="login">Login</div>
                <div>
                    <div className="login-error">{error.email}</div>
                    <div className="login-error">{error.password}</div>
                    <label>Email id</label><br />
                    <input  type="text"  className={`test ${error.email ? "invalid-input" :""}`} placeholder="test@gmail.com" id="email" value={loginformData.email} onChange={handleEmailChange} />
                </div>
                <div className="mid">
                    <label>password</label><br />
                    <input type="text" className={`test-login-name ${error.password ? "invalid-input" :""}`}   placeholder="test@123" id="password" value={loginformData.password} onChange={handlePasswordChange} />
                </div>
                <button onClick={loginClick0} className="login-button-2" disabled={!isFormValid}>Login</button>
            </div>
        </div>
    );
} export default Login;