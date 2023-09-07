//問1
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven() {
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%2===0){
            console.log(`${numbers[i]}は偶数です`);
        }
    }
}

isEven();

//問2
class Car {
    constructor(gass, carNum){
        this.gass=gass;
        this.carNum=carNum;
    }
    getNumGass(){
        console.log(`ガソリンは${this.gass}Lです。ナンバーは${this.carNum}です。`);
    }
}

let myCar = new Car(20, 1234);
myCar.getNumGass();