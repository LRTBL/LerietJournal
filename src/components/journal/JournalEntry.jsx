import React from 'react';

const JournalEntry = () => {
    console.log('');
    return (
        <div className='journal__entry pointer'>
            <div
                className='journal__entry-picture'
                style={{ backgroundSize: 'cover', backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png)' }}
            ></div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'> Un nuevo dia</p>
                <p className='journal__entry-content'>Labore do ullamco laborum ullamco sit.</p>
            </div>
            <div className='journal__entry-date-box'>
                <span> Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};

export default JournalEntry;
