import React from 'react';
import './Bookmarks.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Bookmarks = (props) => {
    const {bookmarks} = props
//    console.log(props.bookmarks);
    // const {ReadTime,title} = props.bookmarks;
  
    return (
        <div className='bookmarks'>
            <div>
                <h3 className='bookmarksItem'>Bookmarks Added : {props.bookmarks.length}</h3>
                <ToastContainer />
            </div>
            <div className='bookmarkItemDiv'>
                {bookmarks.length > 0 && (
                    <h5 className='BookmarksItemTitle'> {bookmarks[bookmarks.length - 1].title}</h5>
                )}
                </div>
            
        </div>
    );
};

export default Bookmarks;