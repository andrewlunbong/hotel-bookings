import React, { useState, useEffect } from 'react';
import ReactSwitch from 'react-switch';

function ToggleCheckIn({ updateHotelBooking, hotelBooking }) {
    const [checked, setChecked] = useState(hotelBooking.checkInStatus);



    const handleChange = (val) => {
        setChecked(val)
        console.log(`val`,val)
    }

    useEffect(() => {
        hotelBooking.checkInStatus = checked
        updateHotelBooking(hotelBooking)
    }, )

    return (
        <div className="app" style={{}}>
            <ReactSwitch
                checked={checked}
                onChange={handleChange}
            />
        </div>
    );
};

export default ToggleCheckIn;
