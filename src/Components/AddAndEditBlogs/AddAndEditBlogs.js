import { useNavigate } from "react-router-dom";
import "./AddAndEditBlogs.css"
function AddAndEditBlogs() {
    const navigate=useNavigate();
    const logoutClick=()=>{
        navigate("/login")
    }
    const handledashboardClick=()=>{
        navigate("/")
    }
    return (
        <div>
            <div className="title-section">
                <div onClick={handledashboardClick} className="title-header">Blogs</div>
                <div className="title-name-section">
                    <span className="title-name">Nikita Kadam</span>
                    <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    <span onClick={logoutClick}className="title-name-logout">Logout</span>
                </div>
            </div>
            <div className="title-middle-section">
                <div>
                    <div className="title-name-mid">Title</div>
                    <hr />
                </div>
                <div className="title-description">
                    <div className="title-sapace">
                        <div>Description</div>
                    </div>
                </div>
                <div className="title-buttons">
                    <button className="title-cancel-button">Cancel</button>
                    <button className="title-save-button">Save</button>
                </div>

            </div>
            <div className="end-footer">
                <div><div className="end-copy">Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2022</div></div>
            </div>
        </div>

    );
} export default AddAndEditBlogs;