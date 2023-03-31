import React from 'react';
import './ShowTime.css'
const ShowTime = (props) => {
    const {ReadTime}= props.bookmarks;
    return (
        <div className='Time'>
            <div>
                <h3>Spend Time : {ReadTime} </h3>
            </div>
        </div>
    );
};

export default ShowTime;