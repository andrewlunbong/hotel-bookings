import { useState } from 'react';
import HotelBookingCard from './HotelBookingCard';

const HotelBookingGrid = ({ hotelBookings, deleteHotelBooking, updateHotelBooking }) => {

    const hotelBookingsList = hotelBookings.map((hotelBooking) => {
        return (
            <HotelBookingCard
                key={hotelBooking._id}
                hotelBooking={hotelBooking}
                deleteHotelBooking={deleteHotelBooking}
                updateHotelBooking={updateHotelBooking}
            />
        )
    })

    return (
        <>
            {hotelBookingsList}
        </>
    );
};

export default HotelBookingGrid;
