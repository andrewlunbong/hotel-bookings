import { useState } from 'react';
import ToggleCheckIn from './ToggleCheckIn';

const HotelBookingCard = ({ hotelBooking, deleteHotelBooking, updateHotelBooking }) => {

    const handleDeleteClick = () => {
        deleteHotelBooking(hotelBooking._id)
    }

    

    return (
        <>
            <h3> {hotelBooking.name}</h3>
            <h3> {hotelBooking.email}</h3>
            <h3> {hotelBooking.checkInStatus ? "Checked in" : "Not checked in"}</h3>

            <button onClick={handleDeleteClick}>Delete Booking</button>
            <ToggleCheckIn hotelBooking={hotelBooking} updateHotelBooking={updateHotelBooking} />
        </>
    );
};

export default HotelBookingCard;


