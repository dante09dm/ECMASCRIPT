//Cómo quitar los elementos repetidos en una sola línea
//👨‍💻 Para crear un array sin elementos repetidos, podemos utilizar Set y el operador de propagación de la siguiente manera:

const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]

//Se realiza la conversión de Array a Set. Set es una estructura que no admite elementos repetidos.
// Por lo tanto, tenemos un Set con los elementos del array sin repetidos.
//Como tenemos una estructura Set, debemos convertirlo a Array.
//El operador de propagación, como su nombre lo indica, propaga los elementos de un iterable en otro iterable.
// Los Sets son iterables como los Arrays, por lo que sus elementos pueden propagarse dentro de un iterable array [... new Set(array)].
// Lo que se asemeja a propagar los elementos de un array dentro de otro array.