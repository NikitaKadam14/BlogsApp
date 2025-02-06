import { useNavigate } from "react-router-dom";
import "./AddAndEditBlogs.css"
import { useState } from "react";
function AddAndEditBlogs() {
    const [addAndEditData, setAddAndEditData] = useState({
        title: "",
        description: "",
    });
    const navigate = useNavigate();
    const handleCancelClick = () => {
        console.log("Cancel click");
        navigate(-1);
    };
    const handleSaveClick = () => {
        console.log("Save click");
        navigate("/blogsList");
    };
    const logoutClick = () => {
        console.log("add and Edit Data:", addAndEditData);
        navigate("/login")
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
    return (
        <div>
            <div className="title-middle-section">
                <div>
                    <input className="title-name-mid" type="text" placeholder="Title" id="title" value={addAndEditData.title} onChange={handletitlechange} />
                </div>
                <div>
                    <textarea className="text-description" id="description" value={addAndEditData.description} onChange={handledescriptionchange}>Description</textarea>
                </div>
                <div className="title-buttons">
                    <button onClick={handleCancelClick} className="title-cancel-button">Cancel</button>
                    <button onClick={handleSaveClick} className="title-save-button">Save</button>
                </div>

            </div>
        </div>

    );
} export default AddAndEditBlogs;