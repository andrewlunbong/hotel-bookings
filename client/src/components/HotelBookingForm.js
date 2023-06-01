import { useState } from 'react';

const HotelBookingForm = ({createHotelBooking}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState("")

    const handleChangeName = (evt)=>{
        setName(evt.target.value)
    }
    const handleChangeEmail = (evt)=>{
        setEmail(evt.target.value)
    }
    const handleCheckInStatus = (evt)=>{
        setStatus(evt.target.value)
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault();
        const checkInStatus = JSON.parse(status)
        const hotelBooking = {
            name,
            email,
            checkInStatus
        }
        createHotelBooking(hotelBooking)
        setName("")
        setEmail("")
        setStatus("")
    }


    return (
        <>
            <h2> Hello world</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter name:
                </label>
                <input type="text" value={name} onChange={handleChangeName} required/>
                <label>
                    Enter email:
                </label>
                <input type="text" value={email} onChange={handleChangeEmail} required/>
                <label>
                    Check in Status:
                </label>
                <select onChange={handleCheckInStatus} required>
                    <option hidden value="">Status</option>
                    <option value={true}>Checked In</option>
                    <option value={false}>Not Checked In</option>
                </select>
                <input type="submit" value="Add new booking" />
        </form>
        </>
    );
};

export default HotelBookingForm;
