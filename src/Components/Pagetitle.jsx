import React from 'react';

const Pagetitle = ({ subHeading, Heading }) => {
    return (
        <div className='max-w-xs mx-auto mb-5'>

            <p className='text-yellow-500 text-base text-center mb-2'> --- {subHeading} ---</p>

            <h2 className='text-2xl font-serif text-center border-y-4 py-4'> {Heading} </h2>
            
        </div>
    );
};

export default Pagetitle;