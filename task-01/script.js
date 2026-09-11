const grades = [7, 9, 5, 10, 8, 6];

const gradesGte8 = grades.filter((grade) => grade >= 8);
console.log("Notele >= 8:", gradesGte8);

const totalSum = grades.reduce((prev, curr) => prev + curr, 0);
const averageGrade = totalSum / grades.length;
console.log("Media notelor:", averageGrade.toFixed(2));

const increasedGrades = grades.map((grade) => Math.min(grade + 1, 10));
console.log("Notele mărite cu 1 punct (max 10):", increasedGrades);