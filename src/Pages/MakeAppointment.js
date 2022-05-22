import React from 'react';
import appointment from '../assets/images/appointment.png'
import doctor from '../assets/images/doctor.png'
import PrimaryButton from './Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className="p-5">
            <div className="flex justify-center items-center shadow-xl">
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-100px]' src={doctor} alt="Movie" />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl card-title font-bold text-primary">Appointment</h3>
                    <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                    <p className='text-white pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions justify-start">
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default MakeAppointment;