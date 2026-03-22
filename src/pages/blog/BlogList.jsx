import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogList = () => {

    const navigate = useNavigate()


    const blogs = [
        { id: 1, title: "Blog 1", content: "This is the content of Blog 1." },
        { id: 2, title: "Blog 2", content: "This is the content of Blog 2." },
        { id: 3, title: "Blog 3", content: "This is the content of Blog 3." }
    ]

    const DeleteBlog = (id) => {
        alert('Blog Deleted')
    }


    return (
        <div>
            <h1>Blog List</h1>

            <button className='bg-blue-400 p-2 rounded-xl text-white' onClick={() => navigate('/blog/create')}>Create Blog</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>View</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog.id}>
                            <td>{blog.id}</td>
                            <td>{blog.title}</td>
                            <td>{blog.content}</td>
                            <td>
                                <button className='bg-blue-400 p-2 rounded-xl text-white' onClick={() => navigate(`/blog/view/${blog.id}`, { state: { blog } })}>View</button>
                            </td>
                            <td>
                                <button className='bg-blue-400 p-2 rounded-xl text-white' onClick={() => navigate(`/blog/update/${blog.id}`, { state: { blog } })}>Edit</button>
                            </td>
                            <td>
                                <button className='bg-blue-400 p-2 rounded-xl text-white' onClick={() => DeleteBlog(blog.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </div>
    )
}

export default BlogList
