
import { useNavigate } from "react-router-dom";
import "./Register.css"
function Register() {
    const navigate = useNavigate();
    const loginClick = () => {
        navigate("/login")
    }
    const loginClick3 = () => {
        navigate("/login")
    }
    const dashboardClick4 = () => {
        navigate("/")
    }
    return (
        <div>
            <div className="navbar-register">
                <div onClick={dashboardClick4} className="header-blogs">Blogs</div>
                <div>
                    <span onClick={loginClick3} className="login-icon1">Login</span>
                    <span className="login-icon1"></span>
                </div>
            </div>
            <div className="section1">
                <div className="blog">Blogs</div>
                <div>Publish your passions,your way...</div>
                <hr />
                <div className="register">Register</div>
                <div>
                    <label>Name</label><br />
                    <input className="first-name" type="text" placeholder="Firstname Lastname" />
                </div>
                <div>
                    <label>Email id</label><br />
                    <input className="first-name" type="text" placeholder="test@gmail.com" />
                </div>
                <div>
                    <label>password</label><br />
                    <input className="test-1" type="text" placeholder="Test@123" />
                </div>
                <button onClick={loginClick} className="Res-button"><a href="">Register</a></button>
            </div>
            <div className="copy-right">
                <div className="footer-1">Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2022</div>
            </div>

        </div>

    );

}
export default Register;