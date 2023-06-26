//combinar ambos objetos 
//también llamado operador spread 
//(Sirve tanto para objetos como para arrays)
export function solution(
    json1 = {
      name: 'Mr. Michi',
      food: 'Pescado',
    },
    json2 = {
      age: 12,
      color: 'Blanco',
    }
  ) {
    return { ...json1, ...json2 };
  }
 
  console.log(solution());
