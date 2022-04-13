/** Interface named Student that accepts:
    firstName, lastName, age and location
    create two students and an array */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

/** creating the first student */
const student_1: Student = {
  firstName: 'Bilal',
  lastName: 'Abubakari',
  age: 23,
  location: 'Tarkwa',
}

/** creating the second student */
const student_2: Student = {
  firstName: 'Augustina',
  lastName: 'Brago',
  age: 20,
  location: 'Tarkwa',
}

/** creating an array */
const studentArray = [student_1, student_2];

/** Use Vanilla Javascript */
const student_table = document.createElement('student_table');
const table_body = document.createElement('table_body');

studentArray.forEach((obj) => {
  const table_row = document.createElement('row');
  const table_name = document.createElement('table_name');
  const table_location = document.createElement('table_location');
  table_name.textContent = obj.firstName;
  table_location.textContent = obj.location;
  table_row.appendChild(table_name);
  table_row.appendChild(table_location);
  table_body.appendChild(table_row);
});
student_table.appendChild(table_body);
document.body.appendChild(student_table);