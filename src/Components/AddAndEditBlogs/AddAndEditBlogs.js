import { useNavigate, useParams } from "react-router-dom";
import "./AddAndEditBlogs.css"
import { useEffect, useState } from "react";
import axios from "axios";
import _, { create } from "lodash";
function AddAndEditBlogs() {
    const loggedEmail = localStorage.getItem("email");
    console.log("loggedEmail :", loggedEmail);
    const [addAndEditData, setAddAndEditData] = useState({
        title: "",
        description: "",
        createdBy: loggedEmail
    });
    const [error, setError] = useState({
        title: "",
        description: "",
    });
    const { id } = useParams();
    console.log("id:", id);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:4000/posts/${id}`).then((Response) => setAddAndEditData(Response.data))
        }
    }, [id]);
    const navigate = useNavigate();
    const handleCancelClick = () => {
        console.log("Cancel click");
        navigate(-1);
    };
    const handleSaveClick = () => {
        let errorMessage = { title: "", description: "", general: "" };
        if (addAndEditData.title === "" && addAndEditData.description === "") {
            errorMessage.general = "Please enter valid fields";

        }
        else if (addAndEditData.title === "" && addAndEditData.description !== "") {
            errorMessage.title = "Please enter a title";

        }
        else if (addAndEditData.title !== "" && addAndEditData.description === "") {
            errorMessage.description = "Please enter a description";

        } else {
            let addAndEditBlogs = {};
            blogs.map((blogs) => {
                console.log('blogs:', blogs);
                console.log('addAndEditData:', addAndEditData);
                if (blogs.title === addAndEditData.title) {
                    addAndEditBlogs = blogs;
                }
            });
            if (_.isEmpty(addAndEditBlogs)) {
                if (id) {
                    addEditData();
                }
                else {
                    addNewBlogData()
                }
            }
            else {
                errorMessage.title = "Blogs already exists";
            }
        }
        setError(errorMessage);
    };
    const addNewBlogData = () => {
        axios.post("http://localhost:4000/posts", addAndEditData)
            .then(response => {
                console.log("blogs data save:", response.data);
                navigate("/blogsList")
            })
            .catch((error) => {
                console.error("Error blog:", error);
            });
    }
    const addEditData = () => {
        axios.put(`http://localhost:4000/posts/${id}`, addAndEditData)
            .then(response => {
                console.log("blogs data save:", response.data);
                navigate("/blogsList")
            })
            .catch((error) => {
                console.error("Error blog:", error);
            });
    }
    const handletitlechange = (event) => {
        let addEditData = { ...addAndEditData }
        addEditData.title = event.target.value;
        setAddAndEditData(addEditData);
    }
    const handledescriptionchange = (event) => {
        let addEditData = { ...addAndEditData }
        addEditData.description = event.target.value;
        setAddAndEditData(addEditData);
    }
    const isFormValid = addAndEditData.title && addAndEditData.description && !(error.title || error.description);
    return (
        <div>
            <div className="title-middle-section">
                <div>
                    <div className="edit-error">{error.title}</div>
                    <div className="edit-error">{error.description}</div>
                    <input type="text" className={`title-name-mid ${error.title ? "invalid-input" : ""}`} placeholder="Title" id="title" value={addAndEditData.title} onChange={handletitlechange} />
                </div>
                <div>
                    <textarea className={`text-description ${error.description ? "invalid-input" : ""}`} id="description" value={addAndEditData.description} onChange={handledescriptionchange}>Description</textarea>
                </div>
                <div className="title-buttons">
                    <button onClick={handleCancelClick} className="title-cancel-button">Cancel</button>
                    <button onClick={handleSaveClick} className="title-save-button" disabled={!isFormValid}>Save</button>
                </div>

            </div>
        </div>

    );
} export default AddAndEditBlogs;