const students = [
    { id: 21, name: 'Nuzhat Parveen' },
    { id: 31, name: 'Maannaaaaaa' },
    { id: 41, name: 'Ishrat' },
    { id: 71, name: 'Abdullah' }
];

// Using for loop
const output = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const friendsName= element.name;
    output.push(friendsName);
}
console.log(output);

// Advanced way- map-filter
const names = students.map(s => s.name);
console.log(names);

const id= students.map(s => s.id );
console.log(id);

const biggerId = students.filter( s => s.id > 40 );
console.log(biggerId);

const biggerOne = students.find( s => s.id > 40 );
console.log(biggerOne);
