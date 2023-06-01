use hotel_bookings;
db.dropDataBase();

db.bookings.insertMany([
    {
        name:"Andrew",
        email:"Edinburgh@yahoo.com",
        checkInStatus: true
    },
    {
        name:"Angel",
        email:"Venezuala@yahoo.com",
        checkInStatus: false
    },
    {
        name:"Ure",
        email:"Ure@yahoo.com",
        checkInStatus: true
    }
])