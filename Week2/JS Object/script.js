let employees = [
  {
    name: "Andy",
    department: "Marketing",
    salary: 45000,
    age: "28"
  },
  {
    name: "Brady",
    department: "Marketing",
    salary: 64000,
    age: "29"
  },
  {
    name: "Cindy",
    department: "IT",
    salary: 79000,
    age: "35"
  },
  {
    name: "Deby",
    department: "Finance",
    salary: 40000,
    age: "22"
  },
  {
    name: "Eddie",
    department: "Finance",
    salary: 86000,
    age: "32"
  }
];

let sum_salaries = 0;

for (let i = 0; i < employees.length; i++) {
    sum_salaries += employees[i].salary;
}

console.log(sum_salaries)
