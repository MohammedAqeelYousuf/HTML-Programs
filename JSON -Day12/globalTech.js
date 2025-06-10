const { json } = require('express/lib/response');
const fs = require('fs');

function parseJSONData() {
    const jsonFilePath = 'globaltech.json'

    fs.readFile(jsonFilePath, (err, data) => {
        if (err) {
            console.error("Error Loading the file");
            return;
        }
        try {
            const jsonData = JSON.parse(data);

            console.log("------JSON Parse Example with Filters------")
            console.log("Parsed JSON Data(JavaScript Object):")
            console.log(JSON.stringify(jsonData, null, 2))
            // console.log(JSON.stringify(jsonData))

            console.log("\nAccessing Data:")
            console.log(`Company Name: ${jsonData.companyname}`)
            console.log(`Headquaters: ${jsonData.headquarters.city}`)
            console.log(`First Department: ${jsonData.departments[0].name}`)

            // First Filter
            console.log("\nDepartment Names and Budget")
            jsonData.departments.forEach(dept => {
                // console.log(`- ${dept.name}: ${dept.budget}`)
                console.log(`- ${dept.name}: ${dept.budget.toLocaleString()}`)
            });
            console.log("\nSkill of Alice")
            const alice = jsonData.departments[0].employess.find(
                emp => emp.firstname.trim() === "Alice"
            );

            if (alice) {
                console.log(alice.skills.join(", "));
            }
            const pythonEmployees = jsonData.departments.flatMap(dept => {
                return dept.employess
                    .filter(emp => emp.skills.includes("Python"))
                    .map(emp => ({
                        name: `${emp.firstname.trim()} ${emp.lastname.trim()}`,
                    }));
            });

            console.log("\nEmployees with Python skill:");
            pythonEmployees.forEach(emp => {
                console.log(`Name: ${emp.name}`);
            });
            console.log("\nDepartments with Budget> $1 Million")
            const bigBudgetDepartment = jsonData.departments.filter(dept => dept.budget > 1000000);
            bigBudgetDepartment.forEach(dept => {
                console.log(`-${dept.name}: ${dept.budget.toLocaleString()}`)
            }
            )

            //fifth filter - display Bob Johnson Project names
            console.log("\nProjects of Bob Johnson:");

            const bob = jsonData.departments
                .flatMap(dept => dept.employess || [])
                .find(emp => emp.firstname.trim() === 'Bob' && emp.lastname.trim() === 'Jhonson');  // fixed

            if (bob?.project) {
                bob.project.forEach(proj => {
                    console.log(`- ${proj.name} - Status: ${proj.status}`);
                });
            } else {
                console.log("No Project found or Bob not Found");
            }
            console.log("\nProducts Released After 2022:");

            jsonData.products.forEach(product => {
                if (product.versions.some(v => new Date(v.releaseDate).getFullYear() > 2022)) {
                    console.log(`- ${product.name}`);
                    product.versions.forEach(version => {
                        if (new Date(version.releaseDate).getFullYear() > 2022) {
                            console.log(`   Version: ${version.versionNumber}, Released: ${version.releaseDate}`);
                        }
                    });
                }
            });
            // Get all unique skills across all departments
const allSkills = new Set(
  jsonData.departments
    .flatMap(dept => dept.employess || [])   // flatten employees
    .flatMap(emp => emp.skills.map(skill => skill.trim())) // flatten skills and trim spaces
);

console.log("All unique skills in the company:");
allSkills.forEach(skill => console.log(`- ${skill}`));

        }
        catch (error) {
            console.error("Error Pasring JSON:", error)
        }
    })
}
parseJSONData()