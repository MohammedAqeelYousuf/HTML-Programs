const fs = require('fs');
fs.readFile('student.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  const studentsData = JSON.parse(data);
  console.log("Student Details:");
  studentsData.students.forEach((student) => {
    console.log(`Roll No: ${student["Roll No"]}`);
    console.log(`Name: ${student["Name"]}`);
    console.log(`Math Marks: ${student["Math Marks"]}`);
    console.log(`Science Marks: ${student["Science Marks"]}`);
    console.log(`Grade: ${student["Grade"]}`);
    console.log(`Passed: ${student["Passed"]}`);
    console.log('---------------------------');
  });
});