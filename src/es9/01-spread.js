const user = { username: 'Dante', age: 34, country: 'ARG'};
const { username, ...values} = user;
console.log(username);
console.log(values);