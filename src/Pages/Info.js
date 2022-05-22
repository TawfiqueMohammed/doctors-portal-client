import React from 'react';
import InfoCard from './InfoCard';
import clock from './../assets/icons/clock.svg';
import marker from './../assets/icons/marker.svg';
import phone from './../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard img={clock} cardTitle="Opening Hours" bgclassName="bg-gradient-to-r from-secondary to-primary" cardDescription="Lorem Ipsum is simply dummy text of the pri"></InfoCard>
            <InfoCard img={marker} cardTitle="Our Locations" bgclassName="bg-neutral" cardDescription="Brooklyn, NY 10036, United States"></InfoCard>
            <InfoCard img={phone} cardTitle="Contact Us" bgclassName="bg-gradient-to-r from-secondary to-primary" cardDescription="+000 123 456789"></InfoCard>
        </div>
    );
};

export default Info;