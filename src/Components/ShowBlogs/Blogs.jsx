import React from 'react';
import './Blogs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blogs = (props) => {
    const { image, AuthorName, AuthorImage, Date, title, ReadTime, hashtags, } = props.blogs;
    return (
        <div>
            <div>
                <img id='title-image' src={image} alt="" />
                <div>
                    <div className='author-info'>
                        <div className='author-data' >
                            <img id='author-image' src={AuthorImage} alt="" />
                            <h5 id='author-name'>{AuthorName}</h5>
                            <p id='date'>{Date}</p>
                        </div>
                        <p id='read-time'>{ReadTime} <FontAwesomeIcon icon={faBookmark} /></p>
                    </div>
                        <h5 id='title'>{title}</h5>
                        <p id='hashtag'>{hashtags}</p>
                        <a href="">Mark As Read</a>
                </div>
            </div>
        </div>
    );
};

export default Blogs;