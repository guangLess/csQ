//merge n into m, m n sorted
const mergeSort = (m,n) => {
	let j = 0
	for (let i = 0; i < n.length; i++){
		const eleI = n[i]
		const eleJ = m[j]
		if (eleI > eleJ){
			n.splice(i,0,m[j])
			j++
		}
	}
	if (m.length > 0) n.concat(m)
	return n
}
const mergedA = mergeSort([2,5,6], [1,6,7,8,9])
//console.log(mergedA)

const biSearch = isbool => {
	return function(n){
		let start = 0
		let end = n
		while(start < end){
			let mid = start + Math.floor((end - start)/2)
			//console.log("mid =", mid)
			if(isbool(mid)){
				//move left
				end = mid
			}
			else{
				// move to the right/down
				start = mid + 1
			}
		}
		return start
	}
}
const isbool = (x) => x >= 3
const result = biSearch(isbool)(11)
//console.log("result =", result)

let menmo = {}
let f = 0
const fibN = n => {
	if (menmo[n]) return menmo[n]
	if (n<=2) f = 1
	else {
		f = fibN(n-1) + fibN(n-2)
		menmo[n] = f
	}
	return f
}

//const fib = fibN(4)
//console.log(fib)

//let menmo = {}
let possiblites = 0
const steps = n => {
	if (menmo[n]) return menmo[n]
	if (n<1) f = 0
	else {
		f = 1 + steps(n-1) + steps(n-2) + steps(n-3)
		menmo[n] = f
		// menmo[n] = 1 + steps(n-1) + steps(n-2) + steps(n-3)
	}
	return f
}
const possibleSteps = steps(3)
//console.log(possibleSteps)

const maxSubArray = arr => {
	let tempM = arr[0]
	let max = arr[0]
	let pointer = 0
	let pointerB = 0
	for (let i = 0; i < arr.length; i++){
		if (arr[i] > max + arr[i]){
			pointer = i
			pointerB = i
		}
		//console.log(max)
		max = Math.max(max+ arr[i], arr[i])
		if(tempM < max) {
			pointerB = i
			//console.log(pointer, pointerB)	 
		}
		tempM = Math.max(tempM, max)
	}
	return tempM
}
const test_1 =  [-1, 2, 3, -3, 4]//[-6,2,-3,-4,-1,-5,-5]//[-2, 1, -3, 4, -1, 2, 1, -5, 4]
const kAlgo = maxSubArray(test_1)
//console.log(kAlgo)

// assume items is nicely packed as a 2d array element as [value, weight]
// limit is a weight limit
const getMaxValueDP = (items, limit) => {
	//generate the table width is 0 to the limit val, height is number of items
	//limit +1, becasue it starts from 0. Maybe starts from 1 is ok.

	let menmo = Array(items.length).fill(Array(limit+1).fill(0))
	console.log("menmo ==", menmo[0].length)
	//console.log()
	let table = []

	for(let i = 0; i< items.length; i++){
		console.log("----------")
		table.push([])
  	for(let j = 0 ; j <= limit; j++){
			const itemWeight = items[i][1]
			const itemValue = items[i][0]
			//console.log("i=", i, "j =", j, "weight=", itemWeight, "value=", itemValue)

			// if i === 0 do the thing table = .... 
			// if itemWeight > j // maybe then if it is === 0 and then whatever
			if(itemWeight > j && i > 0){
				//table[i].push()
				menmo[i][j] = menmo[i-1][j]
			} 
			if(itemWeight <= j) {				
					//const eachTotal = menmo[i]
					// const prevMax = menmo[i-1][(j - itemWeight)]
					//const leftMax = (i===0) ? itemValue : menmo[i-1][(j - itemWeight)]
				
					// const leftMax = (i === 0)? itemValue : menmo[i-1][(j - itemWeight)]
					// console.log("leftMax --->",leftMax)
					// const preMax = (i===0) ? itemValue : menmo[i-1][j]
					// //console.log("preMax =", preMax)
				 //  maxV = Math.max((itemValue + leftMax), preMax)
				 //  console.log("maxV --->", maxV)
				//console.log("itemValue =", itemValue)
				if(i===0) {
					menmo[i][j] = itemValue
					table[i].push(itemValue)
				}
				if(i>0){
					let maxV = Math.max((itemValue + menmo[i-1][j]), menmo[i][j-1])
					table[i].push(maxV)
					menmo[i][j] = maxV
					}
					//console.log("maxV --->", menmo[i][j])
				}
			}
		}
		console.log(menmo)
		console.log("table[][]",table)
}

const items = [[1,1],[4,3]]//,[5,4],[7,5]]
getMaxValueDP(items,5)
//FIXME: it is JS thing, menmo got overriden because it is single thread? need to populate table diffrently



