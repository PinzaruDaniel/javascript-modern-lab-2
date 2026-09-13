import { calculateAverage, calculateSum } from "./utils.js";
import {
  formatStudent,
  getAllStudents,
  getStudentsWithGradeGte,
  calculateClassAverage,
  findStudentById,
  addStudent
} from "./students.js";

console.log("1. TESTARE FUNCTII UTILS (calculateSum, calculateAverage)");
const sampleNumbers = [10, 15, 20, 25, 30];
const sampleSum = calculateSum(sampleNumbers);
const sampleAverage = calculateAverage(sampleNumbers);

console.log(`Valori testate: [${sampleNumbers.join(", ")}]`);
console.log(`Suma valorilor: ${sampleSum}`);
console.log(`Media valorilor: ${sampleAverage.toFixed(2)}\n`);

console.log("2. AFISAREA TUTUROR ELEVILOR (folosind template literals)");
getAllStudents().forEach((student) => {
  console.log(formatStudent(student));
});
console.log();

console.log("3. ADAUGAREA UNUI ELEV NOU");
const newStudent = { id: 6, name: "Cristian", grade: 8.75 };
addStudent(newStudent);
console.log(`Elev nou adaugat cu succes:\n-> ${formatStudent(newStudent)}\n`);

console.log("--- Lista actualizata a elevilor ---");
getAllStudents().forEach((student) => {
  console.log(formatStudent(student));
});
console.log();

console.log("4. IDENTIFICAREA ELEVILOR CU NOTA >= 8");
const topStudents = getStudentsWithGradeGte(8);
console.log(`Numar de elevi cu nota >= 8: ${topStudents.length}`);
topStudents.forEach((student) => {
  console.log(formatStudent(student));
});
console.log();

console.log("5. CALCULAREA MEDIEI CLASEI");
const classAverage = calculateClassAverage();
console.log(`Media notelor pentru intreaga clasa este: ${classAverage.toFixed(2)}\n`);

console.log("6. CAUTAREA UNUI ELEV DUPA ID (tratare cu try / catch)");

const existingId = 3;
try {
  console.log(`[Cautare] Se cauta elevul cu ID = ${existingId}...`);
  const foundStudent = findStudentById(existingId);
  console.log(`[Succes] A fost gasit: ${formatStudent(foundStudent)}`);
} catch (error) {
  console.error(`[Eroare] ${error.message}`);
}

console.log();

const nonExistingId = 99;
try {
  console.log(`[Cautare] Se cauta elevul cu ID = ${nonExistingId}...`);
  const foundStudent = findStudentById(nonExistingId);
  console.log(`[Succes] A fost gasit: ${formatStudent(foundStudent)}`);
} catch (error) {
  console.error(`[Eroare prinsa in catch] ${error.message}`);
}
