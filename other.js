
const shuffle = (a) => {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      //console.log("j =", j)
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
}
shuffle([0,1,2,3,4])

let collect = [] // Nums type
let table = {}

const countPrimes = (n) => {
  for (let i = 1; i <= n; i++){
  	console.log("----i----", i)
  	if ([1,2,3].includes(i) && !collect.includes(i)) {
  		table[i] = [0]
  		collect.push(i)
  		console.log("table 123", table)
  	} else {
  		if(isEven) {
  			if(table[i] === undefined) {
  				table[i] = [2]
  			} else {
  			  console.log("i = ", i, 'table[i] = ', table[i])
  				table[i].push(2)
  			}
  			const remaindingN = (i - 2)
  			countPrimes(remaindingN)
  		}
  	}
  }
  console.log("--end--out loop", table)
  return collect
}

const isEven = n => n%2 === 0
const isOdd = n => n%2 === 1
const evenTest = isEven(21)
const result = countPrimes(4)
console.log(result, evenTest)