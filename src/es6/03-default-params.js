function newUser (name,age,country){
    var name = name || 'Dante';
    var age = age || 25;
    var country = country || 'ARG'
    
    console.log(name,age,country);
}

newUser();
newUser('Pedro', 15, 'CO')

function newAdmin(name = 'Dante', age = 32, country ='ARG'){
    console.log (name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'URU')