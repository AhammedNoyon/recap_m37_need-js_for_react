const student = {
  name: "Alice Johnson",
  age: 20,
  contact: {
    email: "alice@example.com",
    phone: "123-456-7890",
    address: {
      street: "123 Maple St",
      city: "Springfield",
      zipCode: "98765",
    },
  },
  courses: [
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
  ],
  extracurriculars: {
    sports: "Soccer",
    club: "Robotics",
    volunteerHours: 30,
  },
};

//get
const finalValue = student?.courses[1]?.grades?.final;
console.log(finalValue);
const sports = student["extracurriculars"]["club"];
console.log(sports);

let myAge = "age";
console.log(student[myAge]);

//set
student.name = "x";
student["age"] = 30;
console.log(student.name);
console.log(student.age);

student[myAge] = 40;
console.log(student[myAge]);
