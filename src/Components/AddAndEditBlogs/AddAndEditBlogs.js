import { useNavigate } from "react-router-dom";
import "./AddAndEditBlogs.css"
import { useState } from "react";
function AddAndEditBlogs() {
    const [addAndEditData, setAddAndEditData] = useState({
        title: "",
        description: "",
    });
    const [error, setError] = useState({
        title: "",
        description: "",

    });
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
        else if (addAndEditData.title !== "" && addAndEditData.description ==="") {
            errorMessage.description = "Please enter a description";

        } else {
            navigate("/login")
        }
        setError(errorMessage);
        console.log("add and Edit Data:", addAndEditData);
        // navigate("/login")


        console.log("Save click");
        // navigate("/blogsList");
    };
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
    const isFormValid=addAndEditData.title && addAndEditData.description && !(error.title ||error.description); 
    return (
        <div>
            <div className="title-middle-section">
                <div>
                    <div className="edit-error">{error.title}</div>
                    <div className="edit-error">{error.description}</div>
                    <input type="text" className={`title-name-mid ${error.title ? "invalid-input": ""}`} placeholder="Title" id="title" value={addAndEditData.title} onChange={handletitlechange} />
                </div>
                <div>
                    <textarea className={`text-description ${error.description ? "invalid-input": ""}`} id="description" value={addAndEditData.description} onChange={handledescriptionchange}>Description</textarea>
                </div>
                <div className="title-buttons">
                    <button onClick={handleCancelClick} className="title-cancel-button">Cancel</button>
                    <button onClick={handleSaveClick} className="title-save-button" disabled={!isFormValid}>Save</button>
                </div>

            </div>
        </div>

    );
} export default AddAndEditBlogs;