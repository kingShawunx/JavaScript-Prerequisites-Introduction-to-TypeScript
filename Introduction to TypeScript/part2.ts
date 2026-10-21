// 1. Basic types
const studentName: string = "Amaka Okafor";
const studentAge: number = 22;
const isEnrolled: boolean = true;

// The original declaration used number for text, causing a type mismatch.
const courseName: string = "Frontend Development";

console.log({ studentName, studentAge, isEnrolled, courseName });

// 2. Typed functions
function addNumbers(a: number, b: number): number {
  return a + b;
}

function isAdult(age: number): boolean {
  return age >= 18;
}

function getArea(width: number, height: number): number {
  return width * height;
}

// 3. Objects and interfaces
interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  isActive: boolean;
}

const studentOne: Student = {
  id: 1,
  name: "Amaka Okafor",
  age: 22,
  course: "Frontend Development",
  isActive: true,
};

const studentTwo: Student = {
  id: 2,
  name: "Tunde Bello",
  age: 25,
  course: "TypeScript Fundamentals",
  isActive: true,
};

interface Instructor {
  name: string;
  cohort: number;
  subjects: string[];
}

function introduceInstructor(instructor: Instructor): string {
  return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(", ")}`;
}

const instructor: Instructor = {
  name: "Stanley",
  cohort: 8,
  subjects: ["HTML", "CSS", "JavaScript"],
};

// 4. Arrays and union types
const names: string[] = ["Amaka", "Tunde", "Fatima"];
const scores: number[] = [88, 72, 95, 60, 45];

function formatId(id: string | number): string {
  return String(id);
}

console.log(addNumbers(10, 5), isAdult(studentAge), getArea(8, 5));
console.log(studentOne, studentTwo);
console.log(introduceInstructor(instructor));
console.log(names, scores, formatId(42), formatId("abc"));
