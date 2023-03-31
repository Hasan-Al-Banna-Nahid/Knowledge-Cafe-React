import React from 'react';
import './Bookmarks.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Bookmarks = (props) => {
   console.log(props.bookmarks);
    // const {ReadTime,title} = props.bookmarks;
  
    return (
        <div className='bookmarks'>
            <div>
                <h3 className='bookmarksItem'>Bookmarks Added : {props.bookmarks.length}</h3>
                <h3 className='BookmarksItemTitle'></h3>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Bookmarks;