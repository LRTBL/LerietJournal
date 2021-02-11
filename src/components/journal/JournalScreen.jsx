import React from 'react';
import Sidebar from './Sidebar';
// import NothingSelected from './NothingSelected';
import NoteScreen from '../notes/NoteScreen';

const JournalScreen = () => {
    console.log('');
    return (
        <div className='journal__main_content'>
            <Sidebar />

            <main>
                {/* <NothingSelected /> */}
                <NoteScreen />
            </main>
        </div>
    );
};

export default JournalScreen;
