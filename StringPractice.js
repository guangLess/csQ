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
// starts from both ends, this one is nice😎
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
		return reverseNum((num * -1))
	}
	if(num === 0) return 0
	if(num > 0)  return reverseNum(num)
}

const reverseNum = n => {
	//n is always a possitive int
	//since ints are not a big array, we use JS build in method
	const nString = n.toString().split('').reverse().join('') 
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

const findFirstQ = words => {
	let hash = new Map()
	let result = ''
	for(let i = 0; i < words.length; i++){
		const ele = words[i]
		if(hash.has(ele)) hash.set(ele, hash.get(ele)+1)
		else hash.set(ele,1)
	}
	// hash.forEach( (value, key) => {
	// 	//console.log(value, key)
	// 	if (value === 1) {
	// 		result = key
	// 		break 
	// 	}
	// })
	//let iterator = hash.entries()/ something travas to .next()  === 1) break
	for(let [k,v] of hash){
		if(v === 1) {
			result = k
			break
		} 
	}
	return result
}
const first = findFirstQ('hello')
console.log('first uniqe =', first)
