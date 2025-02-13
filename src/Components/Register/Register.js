
import { useNavigate } from "react-router-dom";
import "./Register.css"
import { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState({
        name: "",
        email: "",
        password: ""

    });
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/users").then((Response) => setUsers(Response.data))
    }, []);

    const navigate = useNavigate();

    const registerClick = () => {
        let errorMessage = { name: "", email: "", password: "" };
        if (formData.name === "" && formData.email === "" && formData.password === "") {
            errorMessage = "Please enter valid fields";
        }
        else if (formData.name === "") {
            errorMessage.name = "Please enter a valid name"
        }
        else if (formData.email === "") {
            errorMessage.email = "Please enter a valid email";
        }
        else if (formData.password === "") {
            errorMessage.password = "Please enter a valid password";
        }
        else {
            const newUserData = {
                ...formData,
                // id: (users.length + 1).toString(),
            };
            let existingUser = {};
            users.map((user) => {
                console.log('user:', user);
                console.log('newUserData:', newUserData);
                if (user.email === newUserData.email) {
                    existingUser = user;
                }
            })
            console.log('existingUser:', existingUser);
            if (_.isEmpty(existingUser)) {
                axios.post("http://localhost:4000/users", newUserData)
                    .then(response => {
                        console.log("User registered:", response.data);
                        navigate("/login");
                    })
                    .catch((error) => {
                        console.error("Error registering user:", error);
                    });

            } else {
                errorMessage.email = "user already exists!";
            }
        };
        setError(errorMessage);
    }
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };
    const isFormValid = formData.name && formData.email && formData.password && !(error.name || error.email || error.password);
    return (
        <div>
            <div className="section1">
                <div className="blog">Blogs</div>
                <div>Publish your passions,your way...</div>
                <hr />
                <div className="register">Register</div>
                <div>
                    <div className="error">{error.name}</div>
                    <div className="error">{error.email}</div>
                    <div className="error">{error.password}</div>
                    <label>Name</label><br />
                    <input type="text" className={`first-name ${error.name ? "invalid-input" : ""}`} placeholder="Firstname Lastname" id="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Email id</label><br />
                    <input type="text" className={`first-name ${error.email ? "invalid-input" : ""}`} placeholder="test@gmail.com" id="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div>
                    <label>password</label><br />
                    <input type="text" className={`test-name ${error.password ? "invalid-input" : ""}`} placeholder="Test@123" id="password" value={formData.password} onChange={handleInputChange} />
                </div>
                <button onClick={registerClick} className="Res-button" disabled={!isFormValid}><ins>Register</ins></button>
            </div>

        </div>
    );
}
export default Register;

