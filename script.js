
function isPrime(number) {

   for (let i = 2; i < number; i++) {
      if (number % i === 0 ) {
         return false
      }
   }
   return number > 1;
}

let number = 112;
const result = isPrime(number);

console.log(`The number ${number} is Prime: ` + result)

// Проверка

// isPrime(0)                          // false
// isPrime(1)                          // false
// isPrime(17)                         // true
// isPrime(10000000000000)             // false