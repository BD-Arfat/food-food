import React from 'react';

const Feature = ({ sponsor }) => {
    const { image } = sponsor;
    return (
        <div className="avatar">
            <div className="w-14 rounded-full">
                <img src={image}/>
            </div>
        </div>
    );
};

export default Feature;