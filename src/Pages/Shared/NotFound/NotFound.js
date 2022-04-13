import React from 'react';
import NotFound404 from '../../../images/NotFound404.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'> Mechanic is sleeping</h2>
            <img className='w-50' src={NotFound404} alt="" />
        </div>
    );
};

export default NotFound;