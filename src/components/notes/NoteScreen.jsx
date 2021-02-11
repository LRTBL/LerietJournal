import React from 'react';
import NoteAppBar from './NotesAppBar';

const NoteScreen = () => {
    console.log('');
    return (
        <div className='notes__main-content'>
            <NoteAppBar />
            <div className='notes__content'>
                <input type='text' placeholder='Some awesone title' className='notes__title-input' autoCorrect='off' />
                <textarea placeholder='What happened today' className='notes__textarea' />
                <div className='notes__image'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' alt='imagen' />
                </div>
            </div>
        </div>
    );
};

export default NoteScreen;
