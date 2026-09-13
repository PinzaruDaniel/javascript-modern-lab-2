import {
  employees,
  filterByDepartment,
  groupByDepartment,
  calculateAverageSalary,
  getExperiencedEmployees,
  increaseSalaryForExperienced
} from "./employees.js";
import { formatEmployee, generateFinalReport } from "./report.js";

console.log("==================================================");
console.log("TASK 4: GESTIONAREA ANGAJATILOR UNEI COMPANII");
console.log("==================================================\n");

console.log("--- 1. Lista initiala a angajatilor ---");
employees.forEach((emp) => console.log(formatEmployee(emp)));
console.log();

const itEmployees = filterByDepartment(employees, "IT");
console.log(`--- 2. Filtrare: Angajatii din departamentul IT (${itEmployees.length} angajati) ---`);
itEmployees.forEach((emp) => console.log(formatEmployee(emp)));
console.log();

console.log("--- 3. Grupare: Angajatii grupati dupa departament ---");
const groupedEmployees = groupByDepartment(employees);
Object.entries(groupedEmployees).forEach(([department, deptEmployees]) => {
  console.log(`\n[Departament: ${department}] (${deptEmployees.length} angajati):`);
  deptEmployees.forEach((emp) => console.log(formatEmployee(emp)));
});
console.log();

const averageSalaryInitial = calculateAverageSalary(employees);
console.log(`--- 4. Salariul mediu initial al companiei: ${averageSalaryInitial.toFixed(2)} MDL ---\n`);

const experiencedEmployees = getExperiencedEmployees(employees, 3);
console.log(`--- 5. Angajati cu experienta mai mare de 3 ani (${experiencedEmployees.length} angajati) ---`);
experiencedEmployees.forEach((emp) => console.log(formatEmployee(emp)));
console.log();

const updatedEmployees = increaseSalaryForExperienced(employees, 3, 10);
console.log("--- 6. Lista dupa majorarea salariului cu 10% pentru cei cu experienta > 3 ani ---");
updatedEmployees.forEach((emp) => console.log(formatEmployee(emp)));
console.log();

console.log("--- 7. Generare și afisare Raport Final ---");
const finalReport = generateFinalReport(employees, updatedEmployees);
console.log(finalReport);
