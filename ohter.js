//missing num
/*
const findNumFrom = (arr) => {
	let missingN
	
		//console.log(arr[0])
		let index = 0
		let upperCollection = []
		let lowerCollection = []
		let ele = arr[0]

		while(upperCollection.length < 2 || lowerCollection.length < 2){
			console.log("check",arr.includes(ele-1), ele)	
		//check upper bond
				if(arr.includes(ele+1)=== true){
					ele = ele + 1
					console.log(ele)	

				} else upperCollection.push(ele+1)
		//check lower bond
			if(arr.includes(ele-1)=== true){
									console.log(ele)	

						ele = ele - 1
				} else lowerCollection.push(ele-1)

				console.log(upperCollection, lowerCollection)
		}
	return missingN
}

const arr = [3,0,1]


const findMissingN = (ele, upperCollection, lowerCollection) => {
		// console.log(ele, upperCollection, lowerCollection)
		// 	if(upperCollection.length < 3 || lowerCollection.length < 3) return upperCollection.concat(lowerCollection)
		// 	else {
		// 		if(!arr.includes(ele+1)) upperCollection.push(ele + 1)
		// 		findMissingN(ele+1, upperCollection, lowerCollection)
		// 		if(!arr.includes(ele+1)) lowerCollection.push(ele - 1)
		// 		findMissingN(ele-1, upperCollection, lowerCollection)
		// 	}
		const eleT = ele
		const test = arr.includes(eleT)
		console.log(test)
		if(upperCollection.length )

		//upper bound
		if(!arr.includes(ele+1)) upperCollection.push(ele+1)
		findMissingN(ele+1, upperCollection, lowerCollection)
		//lower bound
		if(!arr.includes(ele-1)) upperCollection.push(ele-1)
		findMissingN(ele-1, upperCollection, lowerCollection)
}

var ele = arr[0]
let upperCollection = []
let lowerCollection = []
findMissingN(ele, upperCollection, lowerCollection)

//findNumFrom([3,0,1])
*/
/*
  find missing num in an array. 
	Case one there is only one num missing. And if it is sorted
	If array is not sorted, keep track of Max num, then use the same equation
*/

const findTheOnlyOneMissingNum = arr => {
	let missing
	let sum = 0
	let maxLast = 0

	for(let i = 0; i < arr.length; i++){
		// not sorted -> 
		 maxLast = Math.max(maxLast, arr[i])
		//console.log("max =", maxLast)
		sum += arr[i]
	}
	const expectSum = (maxLast * (maxLast + 1))/2 // equation
	return expectSum - sum
}

const n = findTheOnlyOneMissingNum([0,1,3,7,6,4,5])
console.log(n)

const findFewMissingNum = arr => {
	for (let i = 0; i < arr.length; i++){
		if (arr.indexOf(arr[i]) < 0){
			console.log("")
		}
	}
}

/*
If array is sorted, and it is missing more than one number, 
then the method is compare array[i] array[i+1]
*/

/*
If array is not sorted
*/

