let courses = [
  {
    courseName: "Mathematics",
    instructor: "Mr. Smith",
    grades: {
      midterm: 85,
      final: 90,
    },
  },
  {
    courseName: "Physics",
    instructor: "Dr. Brown",
    grades: {
      midterm: 78,
      final: 88,
    },
  },
  {
    courseName: "Literature",
    instructor: "Ms. Green",
    grades: {
      midterm: 92,
      final: 87,
    },
  },
];

const copy = [...courses].map((course) => {
  console.log(course);
});

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 55];
console.log(newNumbers);
