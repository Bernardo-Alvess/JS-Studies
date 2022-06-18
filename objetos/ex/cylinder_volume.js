// Volume of a cylinder : V = πr2h
// r = raio; h = altura

class Cylinder{
    constructor(_diameter, _height){
        this.height = _height;
        this.diameter = _diameter;
    }

    volume(){
        let radius = this.diameter / 2;
        return Math.PI * Math.pow(radius, 2) * this.height;
    }
}

let cyl = new Cylinder(7, 4);

console.log(`Volume = ${cyl.volume().toFixed(4)}`)