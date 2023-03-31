import React from 'react';
import './Bookmarks.css'
const Bookmarks = (props) => {
    const {ReadTime} = props.bookmarks;
    return (
        <div className='bookmarks'>
            <div>
                <h4 className='spendTime'>Spend On Time : </h4>
            </div>
            <div>
                <h3 className='bookmarksItem'>Bookmarks Added : {props.bookmarks.length}</h3>
            </div>
        </div>
    );
};

export default Bookmarks;