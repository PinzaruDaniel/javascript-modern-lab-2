import { calculateAverage } from "./utils.js";

export const students = [
  { id: 1, name: "Ana", grade: 9 },
  { id: 2, name: "Ion", grade: 7 },
  { id: 3, name: "Elena", grade: 10 },
  { id: 4, name: "Mihai", grade: 6 },
  { id: 5, name: "Maria", grade: 8.5 }
];

export const formatStudent = (student) => {
  return `Elev [ID: ${student.id}] - Nume: ${student.name}, Notă: ${student.grade}`;
};

export const getAllStudents = () => {
  return students;
};

export const getStudentsWithGradeGte = (minGrade = 8) => {
  return students.filter((student) => student.grade >= minGrade);
};

export const calculateClassAverage = () => {
  const grades = students.map((student) => student.grade);
  return calculateAverage(grades);
};

export const findStudentById = (id) => {
  const foundStudent = students.find((student) => student.id === id);
  if (!foundStudent) {
    throw new Error(`Elevul cu ID-ul ${id} nu a fost găsit în sistem.`);
  }
  return foundStudent;
};

export const addStudent = (newStudent) => {
  if (!newStudent || typeof newStudent !== "object") {
    throw new Error("Datele elevului sunt invalide.");
  }
  if (!newStudent.id || !newStudent.name || newStudent.grade === undefined) {
    throw new Error("Elevul trebuie să conțină id, name și grade.");
  }
  const exists = students.some((s) => s.id === newStudent.id);
  if (exists) {
    throw new Error(`Elevul cu ID-ul ${newStudent.id} există deja.`);
  }

  students.push(newStudent);
  return newStudent;
};
