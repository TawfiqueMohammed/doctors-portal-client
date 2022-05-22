import React from 'react';
import fluoride from './../assets/images/fluoride.png'
import cavity from './../assets/images/cavity.png'
import whitening from './../assets/images/whitening.png'
import Service from './Service';


const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            title: 'Flouride Treatment',
            description: "Lorem ipsum simply a dummy text"
        },
        {
            _id: 2,
            img: cavity,
            title: 'Cavity Filling',
            description: "Lorem ipsum simply a dummy text"
        },
        {
            _id: 3,
            img: whitening,
            title: 'Teeth Whitening',
            description: "Lorem ipsum simply a dummy text"
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <p className='uppercase text-primary font-bold'>Our Services</p>
                <h2 className='uppercase text-accent text-4xl font-bold'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;