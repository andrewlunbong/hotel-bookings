import { useState, useEffect } from 'react'
import HotelBookingForm from '../components/HotelBookingForm';
import HotelBookingGrid from '../components/HotelBookingGrid';
import HotelBookingService from '../services/HotelBookingService';



const HotelBookingContainer = () => {

    const [hotelBookings, setHotelBookings] = useState([])

    useEffect(() => {
        HotelBookingService.getHotelBookings()
            .then(bookings => setHotelBookings(bookings))
    }, [])

    const createHotelBooking = (newHotelBooking) => {
        HotelBookingService.postHotelBooking(newHotelBooking)
            .then(savedHotelBooking => setHotelBookings([...hotelBookings, savedHotelBooking]))

    };

    const deleteHotelBooking = (idToDelete) => {
        HotelBookingService.deleteHotelBooking(idToDelete)
            .then(() => {
                setHotelBookings(hotelBookings.filter(booking => booking._id !== idToDelete))
            })
    };

    const updateHotelBooking = (updatedBooking) => {
        HotelBookingService.updateHotelBooking(updatedBooking) //what will come back in the response

        //We want to update the state with the new booking
        // .then(array1.find(element => element > 10))
    };

    return (
        <>
            <HotelBookingForm createHotelBooking={createHotelBooking} />
            <HotelBookingGrid hotelBookings={hotelBookings} deleteHotelBooking={deleteHotelBooking} updateHotelBooking={updateHotelBooking} />
        </>
    );
};

export default HotelBookingContainer;