
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

/*
let table = {}
const countPrimes = (n) => {
	let collect = [] // Nums type
  for (let i = 1; i <= n; i++){
  	console.log("----i----", i)
  	if([1,2,3].includes(i) && !table.includes(i)) {
  		table[i] = [1,i] 
  		collect = [i]
  	} else {
  		// if(isOdd(i)){
  		// 	//if(i%)
  		// }
  		if(!table[i]) table[i] = [1]
  		if(isEven(i)){
  			const reminderN = i / 2
  			console.log("reminderN =", reminderN) 			
  			table[i].push(2)
  			const countP = countPrimes(reminderN)
  			table[i] = table[i].concat(countP)
  			console.log('countP ===', countP, table[i])
  			}
  		if(isOdd(i)){

  		}
  	}
  }
  //console.log("--end--out loop", table)
  return collect
}

const isEven = n => n%2 === 0
const isOdd = n => n%2 === 1
const evenTest = isEven(21)
countPrimes(4)
const result = table
console.log(result, evenTest)
*/

const isPrimeNumber = n => {
	// if n is an interger and smaller than 4 (exclude 4) return true break
	// check given num is greater than 3
	for (let i = 2; i <= n; i ++){
		if (n % i === 0 && i !== n) {
			return false
		}
	}
	return true
}
const test = isPrimeNumber(11)
console.log(test)

const getAllPrimeS = n => {
	let table = {}
	const sRoot = Math.round(Math.sqrt(n))
	for(let i = 2 ; i <= sRoot; i++){
		//console.log("i=", i)
		if(table[i] === undefined) table[i] = false
		for(let j = (i*i); j <= n; j = (j+i)) {
			//console.log("j -----> ", j)
			table[j] = false
		}
	}

	let collect = []
	for(let i = 1; i <= n; i ++){
		if (i <= 3) {
			table[i] = true
			collect.push(i)
		}
		if (table[i] === undefined) {
			table[i] = true
			collect.push(i)
		}
	}
	console.log(collect)
}

getAllPrimeS(30)









