import React, { useEffect, useState } from 'react';
import Blogs from '../ShowBlogs/Blogs';
import './LoadBlogs.css'

const LoadBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='load-blogs'>
            <div>
                <div className='blog-items'>
                {
                    blogs.map(blog => 
                    <Blogs 
                        key={blog.id} 
                        blogs={blog} 
                    />
                    )
                }
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default LoadBlogs;