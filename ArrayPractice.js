//NOTE shift index when one element got removed
var nums = [1,1,2,2,2,2,4,5,7,7,7] // sorted 
for (var i = 0; i< nums.length; i++) {
	if(nums[i] === nums[i+1]) {
	  nums.splice(i,1)
	  i = i-1
	}
}
console.log("--->",nums)

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
	console.log("currGap", gap, minBuy)
}


