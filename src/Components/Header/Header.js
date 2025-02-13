import { useNavigate } from "react-router-dom";
import "./Header.css"
import { useEffect } from "react";
function Header() {
    const navigate = useNavigate();
    const loggedEmail = localStorage.getItem("email");
    console.log("loggedEmail :", loggedEmail);
    const handleBlogsClick = () => {
        navigate("/")
    }
    const handleLoginClick = () => {
        navigate("/login");
    }
    const handleRegisterClick = () => {
        navigate("/register")
    }
    const handleLogoutClick = () => {
        localStorage.removeItem("email");
        navigate("/login");
    }
    return (
        <div className="blogs-navbar">
            <div onClick={handleBlogsClick} className="blogs-heading">Blogs</div>
            <div>
                {loggedEmail ? (
                    <>
                        <span className="blogs-button">{loggedEmail}</span>
                        <span onClick={handleLogoutClick} className="blogs-button">Logout</span>
                    </>
                ) : (
                    <>
                        <span onClick={handleLoginClick} className="blogs-button">Login</span>
                        <span onClick={handleRegisterClick} className="blogs-button">Register</span>
                    </>
                )}
            </div>
        </div>
    );
} export default Header;
