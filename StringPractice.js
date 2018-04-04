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
console.log(reverseStringThree('hi poop face'))