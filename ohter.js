//missing num

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

let ele = arr[0]
const findMissingN = (ele, upperCollection, lowerCollection) => {
			if(upperCollection.length < 2 || lowerCollection.length < 2) return upperCollection.concate(lowerCollection)
			else {
				if(!arr.includes(ele+1)) upperCollection.push(ele + 1)
				findMissingN(ele+1)
				if(!arr.includes(ele+1)) lowerCollection.push(ele - 1)
				findMissingN(ele-1)
			}

}

//findNumFrom([3,0,1])