
import { useNavigate } from "react-router-dom";
import Register from "../Register/Register";
import "./Login.css"
import Dashboard from "../Dashboard/Dashboard";
function Login() {
    const navigate=useNavigate();
    const registerClick3=()=>{
        navigate("/register")
    }
    const dashboardClick1=()=>{
        navigate("/")

    }
    const loginClick0=()=>{
        navigate("/logout")
    }
    return (
        <div>
            <div className="nav-bar-login">
                <div onClick={dashboardClick1}className="blogs-title">Blogs</div>
                <div>
                    <span className="login-name"></span>
                    <span onClick={registerClick3}className="register-name">Register</span>
                </div>
            </div>
            <div className="section2">
                <div className="head-name">Blogs</div>
                <div>Publish your passions,your way...</div>
                <hr />
                <div className="login">Login</div>
                <div>
                    <label>Email id</label><br />
                    <input className="test" type="text" placeholder="test@gmail.com" />
                </div>
                <div className="mid">
                    <label>password</label><br />
                    <input className="test-1" type="text" placeholder="test@123" />
                </div>
                <button onClick={loginClick0} className="login-button-2">Login</button>
            </div>
            <div className="copy-3">
                <div className="copyright-4">Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2022</div>
            </div>

        </div>

    );
} export default Login;