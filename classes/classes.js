/**
 * Estrutura de uma classe
 * 
 * class NomeDaClasse{
 * 
 *      Propriedades de Instancia: o que ela tem
 *          - nome;
 *          - idade;
 *          - altura;
 * 
 *      Métodos de Instancia: o que ela faz
 *          - falar;
 *          - pular;
 *          - pular; 
 *}
 */
class Retangulo{
    //Constructor é usada como o setup da classe
    constructor(_width, _height, _color){
        //Propriedades
        this.width = _width;
        this.heigth = _height;
        this.color = _color;
    }

    //Métodos
    getArea(){
        return this.width * this.heigth;
    }

    printDescription(){
        console.log(`Eu sou um retângulo de ${this.width} x ${this.heigth}, e eu sou ${this.color}`);
    }
}

let myRect = new Retangulo(5, 3, 'blue');
let myRect2 = new Retangulo(3, 5, 'preto');

// myRect.printDescription();

class Quadrado{
    constructor(_width){
        this.width = _width;
        this.heigth = _width;
        this.numberOfRequestsForArea = 0;
    }

    get area(){
        this.numberOfRequestsForArea++;
        return this.width * this.heigth;
    }

    set area(area){
        this.width = Math.sqrt(area);
        this.heigth = Math.sqrt(area);
    }
}

let quadrado = new Quadrado(5);

// console.log(quadrado.area);
// quadrado.area = 16;
// console.log(quadrado.area, quadrado.heigth, quadrado.width);

// for(let i = 0; i < 2; i++){
//     console.log(quadrado.area);
// }

// console.log(quadrado.numberOfRequestsForArea);


class Pessoa{
    constructor(){
        this.nome;
    }

    get nomeDaPessoa(){
        return this.nome;
    }

    set nomeDaPessoa(nome){
        this.nome = nome;
    }
}

let lavourense = new Pessoa();


console.log(lavourense.nomeDaPessoa);
lavourense.nomeDaPessoa = 'Pedro';
console.log(lavourense.nomeDaPessoa);
