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
    return (
        <div>
            <div className="middlesection">
                <div className="blog-name">Blogs !</div>
                <div className="">Publish your passions,your way...</div>
                <hr />
                <div className="buttons">
                    <button onClick={loginClick} className="login-button">Login</button>
                    <button onClick={registerClick} className="register-button">Register</button>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;