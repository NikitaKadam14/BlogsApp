
import { useNavigate } from "react-router-dom";
import "./Register.css"
import { useState } from "react";
function Register() {
    const[formData,setFormData]=useState({
        name: "",
        email: "",
        password: ""

    });
    const navigate = useNavigate();
    const loginClick = () => {
        console.log("Register button clicked");
        console.log("Form Data:", formData);
        navigate("/login")
    }
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [id]: value
        }));
      };
    return (
        <div>
            <div className="section1">
                <div className="blog">Blogs</div>
                <div>Publish your passions,your way...</div>
                <hr />
                <div className="register">Register</div>
                <div>
                    <label>Name</label><br />
                    <input className="first-name" type="text"  placeholder="Firstname Lastname" id="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Email id</label><br />
                    <input className="first-name" type="text"  placeholder="test@gmail.com"  id="email" value={formData.email} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>password</label><br />
                    <input className="test-1" type="text"  placeholder="Test@123"  id="password" value={formData.password} onChange={handleInputChange}  />
                </div>
                <button onClick={loginClick} className="Res-button"><a href="">Register</a></button>
            </div>
        </div>

    );

}
export default Register;