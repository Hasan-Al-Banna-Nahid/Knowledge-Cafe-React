import React, { useEffect, useState } from 'react';
import Bookmarks from '../Bookmarks/Bookmarks';
import Blogs from '../ShowBlogs/Blogs';
import ShowTime from '../ShowTime/ShowTime';
import './LoadBlogs.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const LoadBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    const [bookmarks, setBookmarks] = useState([]);
    const handleBookmarks = bookmark => {
        const newBookmarks = [...bookmarks, bookmark];
        setBookmarks(newBookmarks)
        const existingBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        if (existingBookmarks && existingBookmarks.some(b => b.id === bookmark.id)) {
            toast.dark("This Blog already exists!");
            return;
        }else{
            localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
            toast.success("Blog added!");
        }

    }
    useEffect(() => {
        const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        if (storedBookmarks) {
            setBookmarks(storedBookmarks);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }, [bookmarks]);


    return (
        <div className='load-blogs'>
            <div>
                <div className='blog-items'>
                    {
                        blogs.map(blog =>
                            <Blogs
                                key={blog.id}
                                blogs={blog}
                                handleBookmarks={handleBookmarks}
                            />
                        )
                    }
                </div>
            </div>
            <div>
                <ShowTime bookmarks={blogs} />
                <Bookmarks bookmarks={bookmarks} handleBookmarks={handleBookmarks} />
            </div>
        </div>
    );
};

export default LoadBlogs;