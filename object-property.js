const students = [
    { id: 21, name: 'Nuzhat Parveen' },
    { id: 31, name: 'Maannaaaaaa' },
    { id: 41, name: 'Ishrat' },
    { id: 71, name: 'Abdullah' }
];
const output = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const friendsName= element.name;
    output.push(friendsName);
}
console.log(output);