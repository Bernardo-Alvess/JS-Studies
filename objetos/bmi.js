const mark = {
    name: "Mark Miller",
    weight: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.weight / Math.pow(this.height, 2);
        return this.BMI;
    }
}

const john = {
    name: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.weight / Math.pow(this.height, 2);
        return this.BMI;
    }
}

if(john.calcBMI() > mark.calcBMI()){
    console.log(`${john.name} has a higher BMI of ${john.BMI}`);
    console.log(`${mark.name} has a lower BMI of ${mark.BMI}`);
}else{
    console.log(`${mark.name} has a higher BMI of ${mark.BMI}`);
    console.log(`${john.name} has a lower BMI of ${john.BMI}`);
}