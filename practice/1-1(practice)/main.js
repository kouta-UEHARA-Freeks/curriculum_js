console.log("Hello World!!");
console.log("10+ 8 ");
console.log(10 + 8);
console.log("20割る3の余りは" + 20%3 + "です");
//window.alert("Hello world!!");

let price = 100;
console.log(price * 2);
price = 500;
console.log(price * 2);

let a = 15;
let b = 16;
let c = 0;
if(a!=10){
console.log("変数aは10ではありません");
} else{
console.log("aは10です");
}
if(b>=10 && b<20 && b%2==0){
console.log("変数bは10以上20未満、かつ偶数です");
} else if(b>=20){
console.log("bは20以上です");
} else if(b<10){
console.log("bは10未満です");
} else if(b%2!=0){
console.log("bは奇数です");
}
if(c%2==0){
console.log("cは偶数です");
} else{
console.log("cは奇数です");
}

let number=0;
while(number<15){
    number++;
    if(number%3==0 && number%5==0){
        console.log("FizzBuzz!");
    } else if(number%3==0){
        console.log("Fizz!")
    } else if(number%5==0){
        console.log("Buzz!")
        continue;
    } else {
        console.log(number);
    }

}

let fruits;
function createJuice(fruits) {
    console.log(`${fruits}を受け取りました。ジュースにして返します`);
    return (`${fruits}ジュース`);
}
let orangeJuice = createJuice("みかん");
console.log(`${orangeJuice}が届きました`);

let scores = [10, 15, 20, 25];
for(let i=0; i<scores.length; i++){
    if(scores[i]%2==0){
        console.log(`${scores[i]}は偶数です`);
    }
}
let car = {gass: 20.5, num: 1234};
console.log(`ガソリンは${car.gass}です`);
console.log(`ナンバーは${car.num}です`);

class Human{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    walk(){
        console.log(`${this.age}歳の${this.name}が歩きました`);
    }
}
let yamada = new Human('yamada', 20);
console.log(yamada.name);
yamada.walk();

class Taiyaki{
    constructor(nakami){
        this.nakami=nakami;
    }
    syutsuryoku(){
        console.log(`中身は${this.nakami}です`);
    }
}
let anko = new Taiyaki('あんこ');
anko.syutsuryoku();
let cream = new Taiyaki('クリーム');
cream.syutsuryoku();
let cheese = new Taiyaki('チーズ');
cheese.syutsuryoku();