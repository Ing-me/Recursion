const fibonacci = n => Array.from( { lenght: n} )
.reduce((acc, val, i) => acc.concat( i > 1 ? acc[i - 1] + acc[i - 2] : i), []);

console.log(fibonacci(8)) // [0, 1, 1,  2, 3, 5, 8, 13]