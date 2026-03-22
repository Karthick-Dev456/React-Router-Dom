import React from 'react'
import { Outlet, Link } from "react-router-dom";

const BlogLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default BlogLayout
