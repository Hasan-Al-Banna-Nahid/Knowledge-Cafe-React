import React, { useEffect, useState } from 'react';
import Bookmarks from '../Bookmarks/Bookmarks';
import Blogs from '../ShowBlogs/Blogs';
import './LoadBlogs.css'

const LoadBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    const [bookmarks,setBookmarks] = useState([]);
    const handleBookmarks = bookmark =>{
        const newBookmarks = [...bookmarks,bookmark];
        setBookmarks(newBookmarks)
        console.log(bookmark);
    }
    return (
        <div className='load-blogs'>
            <div>
                <div className='blog-items'>
                {
                    blogs.map(blog => 
                    <Blogs 
                        key = {blog.id} 
                        blogs = {blog}
                        handleBookmarks = {handleBookmarks} 
                    />
                    )
                }
                </div>
            </div>
            <div>
                <Bookmarks bookmarks = {bookmarks}/>
            </div>
        </div>
    );
};

export default LoadBlogs;