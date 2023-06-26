//declarando
class User{};

//instanciamiento de una clase
//const newUser = new User();

class user {
    //metodos
    greetings(){
        return "Hello";
    }
};

const gndx = new user ();
console.log (gndx.greetings())

const bebeloper = new user ();
console.log (bebeloper.greetings());

//constructor

class user{
     //constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greetings(){
        return "Hello";
    }
}

const Dante = new user();

//this 

class user {
    constructor(name){
        this.name = name;
    }
    //metodos
    speak() {
        return 'Hello';
    }
    greetings () {
        return `${this.speak()} ${this.name}`;
    }
}

const jorge =new user ('Jorge');
console.log(jorge.greetings());

//setters y getters 

class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greetings(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age; 
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper1 = new user ('Dante', 25);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);


 