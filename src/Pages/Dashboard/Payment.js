import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2fC3L2pDnG4c3S9ZegRSSPyTOLwgorC8pIpPDhTw4F5SgDd4gDi62ln5Rt17BAH7b7AWFvFRYrRhW489IQfvTh00tCz7nFjR')

const Payment = () => {
    const { id } = useParams();
    const url = `https://pacific-mesa-08614.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Please Pay For: {appointment.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-500'>{appointment.date} </span></p>
                    <p>Please Pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                    </Elements>
                </div>

            </div>
        </div>
    );
};

export default Payment;