//NOTE shift index when one element got removed
var nums = [1,1,2,2,2,2,4,5,7,7,7] // sorted 
for (var i = 0; i< nums.length; i++) {
	if(nums[i] === nums[i+1]) {
	  nums.splice(i,1)
	  i = i-1
	}
}
//console.log("--->",nums)

var profit = [3,10,2,15]//[11, 6, 5, 8, 4, 9, 20, 7]
var minBuy = {val: profit[0], index: 0}
var gap = 0

for(let i = 0; i < profit.length; i ++){
	const now = {val: profit[i], index: i}
	const next = {val: profit[i+1], index: i+1}
	const currGap = next.val - now.val

	if(now.val < minBuy.val) minBuy = Object.assign({}, now)
	if(currGap > gap) {
		const tempBest = next.val - minBuy.val
  	 gap = tempBest	
	}
	//console.log("currGap", gap, minBuy)
}

//Rotate an array of n elements to the right by k steps.
//For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

const k = 2;
let A = [1,2,3,4,5,6,7]
for (let i = 0; i < (k+1); i++) {
     A.push(A.shift())
}
//console.log(A)


let k1 = 3
let A1 = [1,2,3,4,5,6,7]
while(k1 >= 0){
	k1--;
	A1.push(A1.shift())
}
//console.log(A1)

function containsDuplicate (N) {
	for (let i = 0; i < N.length; i++){
		const ele = N[i]
		const arr = N.slice(i+1,(N.length))
		if (arr.indexOf(ele) > -1)  return true 
	}
  return false 
}

const bool = containsDuplicate([3,0,1,1,2,1,4])
//console.log(bool)

function hash(keyString) {
	var hashed = 0;
	for (var i = 0; i< keyString.length; i++){
		hashed += keyString.charCodeAt(i);
	}
	//console.log("before hash =", hashed)

	return hashed % 9
}

const hashV = hash("hello")
//console.log("hashV =", hashV)

function containDuplicateWithHas(N){
	let table = {};
	for (let i = 0; i < N.length; i ++){
		if (table[N[i]] !== undefined) return true;
		else table[N[i]] = true;
	}
	return false
}
const test2 = containDuplicateWithHas([1,3,11,2])
//console.log(test2)


function containDuplicateWithMap(N){
		let dupMap = new Map();
		for (let i = 0; i < N.length; i ++){

			const dupKey = dupMap.get(N[i])
			if (dupKey >= 0) {
				dupMap.set(N[i], dupKey+1)
				//console.log(dupMap)
 				}
 			if(dupKey === undefined){
 				dupMap.set(N[i], 0);
 			} 
 				//console.log("map ===>", dupMap)
 		}
}

containDuplicateWithMap([1,3,11,2,1,2,2])

//N = [1,2,3,3,1] -> 2
function findSingle(N) {
	let collect = [];
	for (let i = 0; i < N.length; i++){
		const index = collect.indexOf(N[i])
		if(index > -1) collect.splice(index, 1) // remove
		else collect.push(N[i])
	}
	return collect[0]// method to flat it 
}

const x = findSingle([1])
console.log(x)

function intersect (A, B) {
	// compare the length , use the smaller length. 
	//A is the smaller sized 
	let smallA, bigger
	if (A.length < B.length){
			smallA = A
			bigger = B
	} else { //bigger or equal
		smallA = B
		bigger = A
	}
	//1 original array not mutated
	//let collect = []
	// for (let i = 0; i < smallA.length; i ++){
	// 	if (B.indexOf(smallA[i]) > -1 ) collect.push(smallA[i])
	// }
	//return collect
	
	//2 or use filter, array mutated
	//smallA.filter(ele => bigger.indexOf(ele) > -1)
	//return smallA

	// 3 hash map
	//map the smaller array 
	let map = new Map()
	let collect = []
	smallA.forEach(ele => {
		 if(!map.has(ele)) map.set(ele, 0)
		 else {
		 	console.log("-->", map.get(ele) + 1)
		 	const occur = map.get(ele) + 1
		 	map.set(ele, occur)
		 }
	})
	console.log(map)
	// depends on if the original array needs to be kept or not
	bigger.forEach(ele => {
		if (map.has(ele)) collect.push(ele)
	})
	return collect
}

const intersectV = intersect([2,3,2],[1,2,2,3])
console.log(intersectV)





