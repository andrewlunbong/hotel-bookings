const baseURL = 'http://localhost:9000/api/bookings/'

const HotelBookingService = {
    getHotelBookings(){
        return fetch(baseURL)
        .then(res => res.json())
    },

    postHotelBooking(newHotelBooking) {
        return fetch(baseURL, {
          method: 'POST',
          body: JSON.stringify(newHotelBooking),
          headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
      },
    
      deleteHotelBooking(id) {
        return fetch(baseURL + id, {
          method: 'DELETE'
        })
      },

      updateHotelBooking(modifiedHotelBooking) {
        return fetch(baseURL + modifiedHotelBooking._id, {
          method: 'PUT',
          body: JSON.stringify(modifiedHotelBooking),
          headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
      }

}

export default HotelBookingService