function* iterate (array){
    for (let value of array){
    yield value;
}
}

const it = iterate (['Dante', 'Gonza', 'Roberta', 'Pablito','Valencho']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);