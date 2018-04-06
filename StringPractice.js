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
// find first unique char 
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
//sconsole.log('first uniqe =', first)

//if one is two's anagram, anagram is very odd... why interviwers are so obsessed with it? 🙃
const isAnagram = (one, two) => {
	let bool = true
	if (one === two) return true
	if (one.length > two.length) return false
	if (two.length >= one.length) {
		let hash = new Map() 
		//build the hash
		for (let i = 0; i < two.length; i++){
			const ele = two[i]
			if (hash.has(ele)) hash.set(ele, hash.get(ele)+1)
			else hash.set(ele, 0)
		}
		//look up hash from one
		for (let i = 0; i < one.length; i++){
			const ele = one[i]
			const hasKey = hash.has(ele)
			if(!hasKey){
				bool = false; 
				break
			}
			if(hash.get(ele) < 0){
				bool = false; 
				break
			}
		  if(hasKey){
		  	hash.set(ele, hash.get(ele)-1) //decrease
		  } 
		}
	}	
	return bool
}
console.log("isAnagram = ", isAnagram('cat', 'cat you'))

const isPalindrome = words => {
	words = words.toLowerCase().trim()
	if (words.length <= 1) return true
	const first = words[0]
	const last = words.slice(-1)
	if (first !== last) return false
	if (first === last) return isPalindrome(words.slice(1,-1))
}
console.log(isPalindrome('iron ori'))

