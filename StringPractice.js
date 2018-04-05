// reverse a string 

const reverseString = (word) => {
	let wordRe = ''
	const length = word.length
	for(let i = length-1; i >= 0; i-- ){
	  wordRe += word[i]
	}
	return wordRe
}
const word = reverseString('hello you')
//console.log(word)

// this version looks messy ...
const reverseStringTwo = (word) => {
	if (word.length > 0) {
		 return reverseStringTwo(word.substr(1)) + word.charAt(0)
	} else return ""
}
//console.log("result = ",reverseStringTwo('hi baby'))

const reverseStringThree = (word) => {
	const warray = word.split('')
	let i = 0, j = warray.length-1
	while(i<=j){
		const tempChar = warray[i]
		warray[i] = warray[j]
		warray[j] = tempChar
		i ++
		j--
	}
	return warray.join('')
}
//console.log(reverseStringThree('hi poop face'))

const reverseInts = num => {
	let result
	if (num<0) {
		if (num%10 === 0) num = removeZero(num)// removed all 0s 
		return reverseNum((num * -1)) // striped off - and 000s so -12  12, -12000 12
	}
	if(num === 0) return 0
	if(num > 0)  return reverseNum(num)
}

const reverseNum = n => {
	//n is always a possitive int
	//since ints are not a big array, we use JS build in method
	const nString = n.toString().split('').reverse().join('') 
	console.log(nString,n)
	return parseInt(nString)
}

const removeZero = n => {
	let newN = n
	while(n%10 === 0){
		newN = newN / 10	
	}
 return newN
}

const result = reverseInts(120)
console.log(result)

