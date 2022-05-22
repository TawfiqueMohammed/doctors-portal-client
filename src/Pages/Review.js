import React from 'react';


const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl p-5">
            <div className="card-body items-start text-start">
                {review.description}
            </div>
            <div className='flex pl-8'>
                <img src={review.img} alt="Shoes" className="rounded-full ring ring-primary ring-offset-base-100 mr-5" />
                <div className=''>
                    <h4>{review.name}</h4>
                    <p>{review.country}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;