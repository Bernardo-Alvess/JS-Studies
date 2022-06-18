const student = {
    name: 'Bernardo',
    sclass: 'I',
    rollno: 12
}

for(item in student){
    console.log(item);
}

delete student.rollno;

console.log('');

for(item in student){
    console.log(item);
}