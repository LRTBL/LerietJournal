import React from 'react';

const NotesAppBar = () => {
    console.log('');
    return (
        <div className='notes__appbar'>
            <span> 28 de agosto 2020</span>
            <div>
                <button type='button' className='btn'>
                    Picture
                </button>
                <button type='button' className='btn'>
                    Save
                </button>
            </div>
        </div>
    );
};

export default NotesAppBar;
