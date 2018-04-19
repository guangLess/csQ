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
console.log(mergedA)

const biSearch = isbool => {
	return function(n){
		let start = 0
		let end = n
		let mid = start + Math.floor(end/2)

		while(mid > 0){
			console.log("mid =", mid)
			if(isbool(mid)) break
			else{
				// move to the right/down
				end = mid
				mid = start + Math.floor(end/2)
			}
		}
		return mid
	}
}
const isbool = (x) => x === 5
biSearch(isbool)(11)