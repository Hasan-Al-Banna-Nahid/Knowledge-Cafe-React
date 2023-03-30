import React from 'react';
import './Blogs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blogs = (props) => {
    const { image, AuthorName, AuthorImage, Date, title, ReadTime, hashtags, } = props.blogs;
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
                        <p id='read-time'>{ReadTime} <FontAwesomeIcon icon={faBookmark} /></p>
                    </div>
                    <h3 id='title'>{title}</h3>
                    <p id='hashtag'>{hashtags}</p>
                    <a href="">Mark As Read</a>
                </div>
            </div>
        </div>
    );
};

export default Blogs;