const students = ["준석", "준영", "승원", "윤솔", "예건"];

console.log(students);
console.log(students[1]);

students[1] = "John";
console.log(students[1]);

// length, push, pop, unshift, shift

console.log(students.length);

students.push("현서");
console.log(students);

students.pop();
console.log(students);

students.shift();
console.log(students);

students.unshift("준석");
console.log(students);

for (let i = 0; i < 10; i++) {}

for (let student of students) {
    console.log(student);
}

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
