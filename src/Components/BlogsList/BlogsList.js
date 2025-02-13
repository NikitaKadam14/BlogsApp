
import { useNavigate } from "react-router-dom";
import "./BlogsList.css"
import { useEffect, useState } from "react";
import axios from "axios";
function BlogsList() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
    const loggedEmail = localStorage.getItem("email");
    console.log("loggedEmail :", loggedEmail);
    useEffect(() => {
        getBlogsData();
    }, []);

    const getBlogsData = () => {
        axios.get("http://localhost:4000/posts").then((Response) => setBlogs(Response.data))
    }

    function handlelikes(blogId, likesCount) {
        axios.patch(`http://localhost:4000/posts/${blogId}`, {
            likes: likesCount + 1
        })
            .then(response => {
                getBlogsData();
            })
            .catch(error => console.error('Error updating likes:', error));

    }
    function handledislikes(blogId, dislikesCount) {
        axios.patch(`http://localhost:4000/posts/${blogId}`, {
            dislikes: dislikesCount + 1
        })
            .then(response => {
                getBlogsData();
            })
            .catch(error => console.error('Error updating dislikes:', error));
    }
    function handleEdit(blogId) {
        navigate(`/addAndEditBlogs/${blogId}`);
    }
    function handleDelete(blogId) {
        if (blogs.length === 1 || blogId === 1) {
            console.error('Error: Post 1 cannot be deleted.');
            return;
        }
        axios.delete(`http://localhost:4000/posts/${blogId}`)
            .then(response => {
                getBlogsData();
            })
            .catch(error => console.error('Error deleting blog:', error));
    }
    // const navigate = useNavigate();
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
                            <div>{singleBlog.description}</div>
                            <div className="buttons-1">
                                <div className="thumbs-button">
                                    <button onClick={() => handlelikes(singleBlog.id, singleBlog.likes)} className="thumbs-up-button"><i class="fa fa-thumbs-up" aria-hidden="true"></i> {singleBlog.likes}</button>
                                    <button onClick={() => handledislikes(singleBlog.id, singleBlog.dislikes)} className="thumbs-down-button"><i class="fa fa-thumbs-down" aria-hidden="true"></i>{singleBlog.dislikes}</button>

                                </div>
                                <div>
                                    {singleBlog.createdBy === loggedEmail && (
                                        <>
                                            <button onClick={() => handleEdit(singleBlog.id)} className="edit-button"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
                                            <button onClick={() => handleDelete(singleBlog.id)} className={`delete-button ${blogs.length === 1 ? 'disabled' : ''}`}
                                                disabled={blogs.length === 1}><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>


                    </div>
                })}
            </div>

        </div>

    );
} export default BlogsList;