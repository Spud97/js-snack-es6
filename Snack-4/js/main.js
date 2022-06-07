let students = [
  { name: "Marco", id: 213, grades: 78 },
  { name: "Paola", id: 110, grades: 96 },
  { name: "Andrea", id: 250, grades: 48 },
  { name: "Gaia", id: 145, grades: 74 },
  { name: "Luigi", id: 196, grades: 68 },
  { name: "Piero", id: 102, grades: 50 },
  { name: "Francesca", id: 120, grades: 84 },
];
let newStudents = [];

students.forEach((student) => {
  const upperName = student.name.toUpperCase();
  newStudents.push(upperName);
});

console.table(newStudents);

const over70 = students.filter((student) => student.grades > 70);
console.log(over70);

const idOver120 = students.filter((student) => student.grades > 70 && student.id > 120);
console.log(idOver120);
