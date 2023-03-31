import React from 'react';
import './Blogs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blogs = (props) => {
    const { image, AuthorName, AuthorImage, Date, title, ReadTime, hashtags } = props.blogs;
    const handleBookmarks = props.handleBookmarks;
    let randomTime = Math.floor(Math.random()*20 + 5) 
    
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
                        <p id='read-time'> <span id='time'>{randomTime}</span>{ReadTime} <FontAwesomeIcon onClick={()=>handleBookmarks(props.blogs)} icon={faBookmark} /></p>
                    </div>
                    <a id='title'>{title}</a>
                    <p id='hashtag'>{hashtags}</p>
                    <button onClick={()=>handleBookmarks(props.blogs)}>Mark As Read</button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;