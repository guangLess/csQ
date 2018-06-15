
const sortByStrings = (s,t) => {
	let order = stringToObj(t)
	for (let char of s){
		if (order[char] !== undefined){
			if (order[char] >= 1) order[char]++	
			else order[char] = 1
		}
	}
	return objToStringWithOrder(order)
}

function stringToObj(str){
	let obj = {}
	for (let char of str){
		obj[char] = 0
	}
	return obj
}

function objToStringWithOrder(obj){
	let sum = []
	for (let ele in obj){
			const key = ele
			const value = obj[key]
			if (value > 1) sum.push(key.repeat(value))	
			if (value === 1) sum.push(key)
	}
	return sum.join('')
}

const test = sortByStrings("weather", "therapyw") //"good", "odg"
console.log(test)
