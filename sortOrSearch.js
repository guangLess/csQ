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

const fib = fibN(4)
console.log(fib)
