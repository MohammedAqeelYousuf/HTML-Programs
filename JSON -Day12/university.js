const fs = require('fs');

const universityData = JSON.parse(fs.readFileSync('university.json', 'utf-8'));

// 1. Faculty with Python expertise
console.log("1. Faculty with Python expertise:");
for (const dept of universityData.departments) {
  for (const fac of dept.faculty || []) {
    if (fac.expertise.includes("Python")) {
      console.log(`- ${fac.firstName} ${fac.lastName} (ID: ${fac.id}) - Department: ${dept.name}`);
    }
  }
}

// 2. Departments with budget > $2M
console.log("\n2. Departments with budget > $2M:");
for (const dept of universityData.departments) {
  if (dept.budget > 2000000) {
    console.log(`- ${dept.name}: $${dept.budget}`);
  }
}

// 3. Courses taught by Jane Williams
console.log("\n3. Courses taught by Jane Williams:");
for (const dept of universityData.departments) {
  for (const fac of dept.faculty || []) {
    if (fac.firstName === "Jane" && fac.lastName === "Williams") {
      for (const course of fac.courses) {
        console.log(`- ${course}`);
      }
    }
  }
}

// 4. Programs with batches after 2021
console.log("\n4. Programs with batches after 2021:");
for (const prog of universityData.programs) {
  if (prog.batches.some(b => b.batchYear > 2021)) {
    console.log(`- ${prog.name}`);
  }
}

// 5. All unique faculty expertise
console.log("\n5. All unique faculty expertise:");
const expertiseSet = new Set();
for (const dept of universityData.departments) {
  for (const fac of dept.faculty || []) {
    for (const skill of fac.expertise) {
      expertiseSet.add(skill);
    }
  }
}
for (const skill of expertiseSet) {
  console.log(`- ${skill}`);
}

// 6. Faculty teaching more than 1 course
console.log("\n6. Faculty teaching more than 1 course:");
for (const dept of universityData.departments) {
  for (const fac of dept.faculty || []) {
    if (fac.courses && fac.courses.length > 1) {
      console.log(`- ${fac.firstName} ${fac.lastName} (ID: ${fac.id}) - ${fac.courses.length} courses`);
    }
  }
}

// 7. Total graduates
console.log("\n7. Total graduates:");
let totalGraduates = 0;
for (const prog of universityData.programs) {
  for (const batch of prog.batches) {
    totalGraduates += batch.graduates;
  }
}
console.log(totalGraduates);

// 8. Departments without faculty
console.log("\n8. Departments without faculty:");
for (const dept of universityData.departments) {
  if (!dept.faculty || dept.faculty.length === 0) {
    console.log(`- ${dept.name}`);
  }
}

// 9. Faculty teaching Machine Learning
console.log("\n9. Faculty teaching Machine Learning:");
for (const dept of universityData.departments) {
  for (const fac of dept.faculty || []) {
    const teachesML =
      fac.expertise.includes("Machine Learning") ||
      (fac.courses || []).some(c =>
        (typeof c === 'string' ? c : c.title).toLowerCase().includes("machine learning")
      );
    if (teachesML) {
      console.log(`- ${fac.firstName} ${fac.lastName} (ID: ${fac.id}) - Department: ${dept.name}`);
    }
  }
}

// 10. Programs with 300+ graduates
console.log("\n10. Programs with 300+ graduates:");
for (const prog of universityData.programs) {
  if (prog.batches.some(b => b.graduates >= 300)) {
    console.log(`- ${prog.name}`);
  }
}
