import { useNavigate } from "react-router-dom";
import "./Dashboard.css"
import { useState } from "react";
function Dashboard() {
    const navigate = useNavigate();
    const registerClick = () => {
        navigate("/register");
    }
    const loginClick = () => {
        navigate("/login")
    }
    const loginClick1 = () => {
        navigate("/login")
    }
    const registerClick1 = () => {
        navigate("/register")

    }
    return (
        <div>
            <div className="navbar">
                <div className="header">Blogs</div>
                <div>
                    <span onClick={loginClick1} className="login-icon">Login</span>
                    <span onClick={registerClick1} className="login-icon">Register</span>
                </div>
            </div>
            <div className="middlesection">
                <div className="blog-name">Blogs !</div>
                <div className="">Publish your passions,your way...</div>
                <hr />
                <div className="buttons">
                    <button onClick={loginClick} className="login-button">Login</button>
                    <button onClick={registerClick} className="register-button">Register</button>
                </div>
            </div>
            <div className="copy-right">
                <div className="footer">Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2022</div>
            </div>
        </div>

    );
}
export default Dashboard;