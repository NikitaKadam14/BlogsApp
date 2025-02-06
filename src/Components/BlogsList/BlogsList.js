
import { useNavigate } from "react-router-dom";
import "./BlogsList.css"
import { useState } from "react";
function BlogsList() {
    const [blogs, setBlogs] = useState([{
        title: "Hello World",
        createdBy: "kadamnik68@gmail.com",
        createdAt: "30 Jan, 2021",
        blogsDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        likes: 0,
        dislikes: 0,
    },
    {
        title: "Hello World1",
        createdBy: "kadamnik68@gmail.com1",
        createdAt: "31 Jan, 2021",
        blogsDescription: "I am new",
        likes: 0,
        dislikes: 0,


    }]);
    function handlelikes(index) {
        let tempBlogs = [...blogs];
        tempBlogs[index].likes++;
        setBlogs(tempBlogs)
    }
    function handledislikes(index) {
        let tempBlogs = [...blogs];
        tempBlogs[index].dislikes++;
        setBlogs(tempBlogs)
        
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