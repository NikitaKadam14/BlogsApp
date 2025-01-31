
import { useNavigate } from "react-router-dom";
import "./Logout.css"
function Logout() {
    const navigate=useNavigate();
    const createnewbuttonClick=()=>{
        navigate("/addAndEditBlogs")
    }
    const handleDashboardClick=()=>{
        navigate("/")
    }
    return (
        <div>
            <div className="logout-navbar">
                <div onClick={handleDashboardClick}className="logout-blog">Blogs</div>
                <div className="logout-button">
                    <span className="logout-button-name-1">Nikita Kadam</span>
                    <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    <span className="logout-button-name-2">Logout</span>
                </div>
            </div>
            <div className="mid-section">
                <div className="logout-post">
                    <div className="logout-heading">Blogs</div>
                    <button onClick={createnewbuttonClick} className="create-new-post"><i class="fa fa-plus-circle" aria-hidden="true"></i> Create new post</button>
                </div>
                <div className="publish">Publish your passions,your way...</div>
                <hr />
                <div className="lorem">
                    <div className="hello">Hello World</div>
                    <div className="logout-by"><strong>Created By</strong><em> kadamnik68@gmail.com</em></div>
                    <div><strong>Created At</strong><em> 30 Jan, 2021</em></div>
                    <hr />
                    <div>
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </div>
                        <div className="thumbs-button">
                            <button className="thumbs-up-button"><i class="fa fa-thumbs-up" aria-hidden="true"></i> 0</button>
                            <button className="thumbs-down-button"><i class="fa fa-thumbs-down" aria-hidden="true"> 0</i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-copy">Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2022</div>
            </div>
        </div>

    );
} export default Logout;