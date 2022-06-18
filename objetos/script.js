// //Array
// const jonasArray = [
//     'Jonas',
//     'Schemedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// /*
// Para resolver o problema de não ter nomes significativos
// para cada item presente dentro do array, temos os objetos
// */

// //Objeto
// const bernardo = {
//     firstName: 'Bernardo',
//     lastName: 'Alves',
//     age: 2022-2003,
//     job: 'programador',
//     friends: ['Vitor', 'Bryan', 'Puska']
// }

// //Duas formas distintas de obter os valores das propriedades de um objeto

// console.log(bernardo.lastName);
// console.log(bernardo['lastName']);

// const nameKey = 'Name';
// console.log(bernardo[`first${nameKey}`]);
// console.log(bernardo[`last${nameKey}`]);


// // const interestedIn = prompt('What do you want to know about Bernardo? Choose between firstName, lastName, age, job, and friends');

// // if(bernardo[interestedIn]){
// //     alert(bernardo[interestedIn]);
// // }else{
// //     alert("Wrong request");
// //     askJonas();
// // }

// bernardo.location = 'Brasil';
// bernardo['twitter'] = '@BernardoAlves__'

// console.log(bernardo);

// //Challenge
// //"Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${bernardo.firstName} has ${bernardo.friends.length} friends, and his most hated friend is called ${bernardo.friends[0]}`);

//Métodos de objetos

var today = new Date();

const bernardo = {
    firstName: 'Bernardo',
    lastName: 'Alves',
    birthYear: 2003,
    job: 'programador',
    friends: ['Vitor', 'Bryan', 'Puska'],
    hasDriversLicence: false,
    calcAge: function(){
        this.age =  today.getFullYear() - this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} é um ${this.job} de ${this.calcAge()} anos, ele tem ${this.friends.length} amigo(s) e ${this.hasDriversLicence ? 'tem' : 'não tem'} uma carteira de motorista`;

    }
};

bernardo.calcAge();
console.log(`A idade de ${bernardo.firstName} é ${bernardo.age}`);
// console.log(bernardo['calcAge']());

/**Write method called getSummary() 
 * Should return a string that summarizes the data about the person object
*/

console.log(bernardo.getSummary());
console.log('alo');
