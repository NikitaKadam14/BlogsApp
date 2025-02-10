
import { useNavigate } from "react-router-dom";
import "./BlogsList.css"
import { useEffect,useState } from "react";
import axios from "axios";
function BlogsList() {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/posts").then((Response)=> setBlogs(Response.data))
    },[]);
    function handlelikes(index) {
        axios.patch(`http://localhost:4000/posts/${blogs[index].id}`, {
            likes: blogs[index].likes+1
        })
        .then(response => {
            let  tempBlogs=[...blogs];
            tempBlogs[index]=response.data
            setBlogs(tempBlogs);
        })
        .catch(error => console.error('Error updating likes:', error));
    
    }
    function handledislikes(index) {
        axios.patch(`http://localhost:4000/posts/${blogs[index].id}`, {
            dislikes: blogs[index].dislikes+1
        })
        .then(response => {
            let tempBlogs = [...blogs];
        tempBlogs[index]=response.data
            setBlogs(tempBlogs);
        })
        .catch(error => console.error('Error updating dislikes:', error));
    }
        
    
    const navigate = useNavigate();
    const createnewbuttonClick = () => {
        navigate("/addAndEditBlogs")
    }
    return (
        <div>
            <div className="mid-section">
                <div className="logout-post">
                    <div className="logout-heading">Blogs</div>
                    <button onClick={createnewbuttonClick} className="create-new-post"><i class="fa fa-plus-circle" aria-hidden="true"></i> Create new post</button>
                </div>
                <div className="publish">Publish your passions,your way...</div>
                <hr />

                {blogs.map((singleBlog, index) => {
                    console.log('singleBlog: ', singleBlog)
                    return <div className="lorem">
                        <div className="hello">{singleBlog.title}</div>
                        <div className="logout-by"><strong>Created By</strong><em> {singleBlog.createdBy}</em></div>
                        <div><strong>Created At</strong><em> {singleBlog.createdAt}</em></div>
                        <hr />
                        <div>
                            <div>{singleBlog.blogsDescription}</div>
                            <div className="thumbs-button">
                                <button onClick={() => handlelikes(index)} className="thumbs-up-button"><i class="fa fa-thumbs-up" aria-hidden="true"></i> {singleBlog.likes}</button>
                                <button onClick={() => handledislikes(index)} className="thumbs-down-button"><i class="fa fa-thumbs-down" aria-hidden="true"></i>{singleBlog.dislikes}</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </div>

    );
} export default BlogsList;