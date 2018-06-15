
const sortByStrings = (s,t) => {
	//console.log("hello")
	let order = stringToObj(t)
	for (let char of s){
		console.log(char)
		if (order[char] !== undefined) {
			//console.log("xxoo", order)
			if(order[char] >= 1) {
				//console.log("xxoo", order)
				order[char]++
			} else {
				order[char] = 1
				//console.log("else", order)
			}
		}
	}
	const result = objToStringWithOrder(order)
	console.log("result", result)
}

function stringToObj(str) {
	let obj = {}
	for (let char of str) {
		obj[char] = 0
	}
	return obj
}

function objToStringWithOrder(obj){
	console.log("--->",obj)
	let sum = []
	for (let ele in obj){
			const key = ele
			const value = obj[key]
			if (value > 1) {
				sum.push(key.repeat(value))	
			} 
			if (value === 1) {
				sum.push(key)
			}
	}
	//console.log("sum ===", sum.join(''))
	return sum.join('')
}

//objToStringWithOrder({"h":1, "d":2})

sortByStrings("weather", "therapyw") //"good", "odg"


//const test = stringToObj("hello")
//console.log(test)