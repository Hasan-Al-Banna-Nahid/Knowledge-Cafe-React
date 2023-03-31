import React from 'react';
import './Blogs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Blogs = (props) => {
    const {id, image, AuthorName, AuthorImage, Date, title, ReadTime, hashtags } = props.blogs;
    const handleBookmarks = props.handleBookmarks;
    const handleTime = props.handleTime;
    
    
    return (
        <div>
            <div className='card'>
                <img id='title-image' src={image} alt="" />
                <div>
                    <div className='author-info'>
                        <div className='author-data' >
                            <img id='author-image' src={AuthorImage} alt="" />
                            <div className='authorName-Date'>
                                <p id='author-name'>{AuthorName}</p>
                                <p id='date'>{Date}</p>
                            </div>
                        </div>
                        <p id='read-time'> 10 {ReadTime} <FontAwesomeIcon onClick={()=>handleBookmarks(props.blogs)}  icon={faBookmark} /></p>
                    </div>
                    <a id='title'>{title}</a>
                    <p id='hashtag'>{hashtags}</p>
                    <button>Mark As Read</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Blogs;