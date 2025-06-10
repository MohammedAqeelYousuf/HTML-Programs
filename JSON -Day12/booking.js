const fs = require('fs');

fs.readFile('booking.json', 'utf8', (err, data) => {
  if (err) throw err;
  const bookings = JSON.parse(data).bookings;

  console.log("---- Booking Information ----");
  bookings.forEach(booking => {
    console.log(booking);
    console.log('----------------------------');
  });
});

fs.readFile('patients.json', 'utf8', (err, data) => {
  if (err) throw err;
  const patients = JSON.parse(data).patients;

  console.log("\n---- Patient Information ----");
  patients.forEach(patient => {
    console.log(patient);
    console.log('----------------------------');
  });
});