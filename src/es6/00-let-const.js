var Name = 'Dante';
Name = 'Agro';
console.log(Name);

let fruit = 'Apple';
fruit = 'Banana';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(fruit);

const fruits = () => {
    if (true) {
        var fruit1 = 'Tomato'; // function scope
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Apple' //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits(); 