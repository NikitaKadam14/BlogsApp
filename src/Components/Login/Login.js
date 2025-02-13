
import { useNavigate } from "react-router-dom";
import Register from "../Register/Register";
import "./Login.css"
import Dashboard from "../Dashboard/Dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
function Login() {
    const [loginformData, setLoginFormData] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState({
        email: "",
        password: "",

    });
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/users").then((Response) => setUsers(Response.data))
    }, []);


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
            let foundUser = {}
            users.map((user) => {
                console.log('user:', user);
                console.log('loginformData:', loginformData);
                if (user.email === loginformData.email) {
                    foundUser = user;
                }
            })
            console.log('foundUser:', foundUser);
            if (!_.isEmpty(foundUser)) {
                if (foundUser.password === loginformData.password) {
                    localStorage.setItem('email', foundUser.email);
                    navigate("/blogsList");
                } else {
                    errorMessage.password = "Incorrect password";
                }
            }
            else {
                errorMessage.email = "User not found";
            }
        }
        setError(errorMessage);
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
    const isFormValid = loginformData.email && loginformData.password && !(error.email || error.password);
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
                    <input type="text" className={`test ${error.email ? "invalid-input" : ""}`} placeholder="test@gmail.com" id="email" value={loginformData.email} onChange={handleEmailChange} />
                </div>
                <div className="mid">
                    <label>password</label><br />
                    <input type="text" className={`test-login-name ${error.password ? "invalid-input" : ""}`} placeholder="test@123" id="password" value={loginformData.password} onChange={handlePasswordChange} />
                </div>
                <button onClick={loginClick0} className="login-button-2" disabled={!isFormValid}>Login</button>
            </div>
        </div>
    );
} export default Login;