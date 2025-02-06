import { useNavigate } from "react-router-dom";
import "./Header.css"
import { use } from "react";
function Header() {
    const navigate=useNavigate();
    const handleBlogsClick=()=>{
        navigate("/")
    }
    const handleLoginClick=()=>{
        navigate("/login");
    }
    const handleRegisterClick=()=>{
        navigate("/register")
    }
    return (
        <div className="blogs-navbar">
            <div onClick={handleBlogsClick} className="blogs-heading">Blogs</div>
            <div>
                <span onClick={handleLoginClick} className="blogs-button">Login</span>
                <span onClick={handleRegisterClick} className="blogs-button">Register</span>
            </div>
        </div>

    );
} export default Header;