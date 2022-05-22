import React from 'react';
import quote from '../assets/icons/quote.svg'
import Review from './Review';
import people1 from '../assets/images/people1.png'
import people2 from '../assets/images/people2.png'
import people3 from '../assets/images/people3.png'

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            country: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            country: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            country: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        },
    ]
    return (
        <div>
            <div className='flex mt-10'>
                <div className='flex-1'>
                    <h4 className='text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-xl font-bold'>What Our Patient Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="quote"></img>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;