//linked list problems

function ListNode(val) {
	this.val = val
	this.next = null
}
/*
check the head node
check the tail node
then figure out the inbetween 
It is easier on the logic side this way, seems like! for now!
*/
ListNode.prototype.deleteNode = function(val){
		if (this.val === val){
			this.val = this.next.val
			this.next = this.next.next
			console.log("head node", this.val)
		} else {
			let current = this.next
			let previous = this		
			while(current){
				if(current.next === null && current.val === val) {
					console.log('tail --> last one is the val')
					previous.next = null
					break
				}
				if(current.val === val) {
				 	console.log(current.val, 'previous =', previous.val)
				 	previous.next = current.next
				 	previous.next.val = current.next.val
				 	break
				}
				previous = current
				current = current.next
			}
		}
}

ListNode.prototype.deleteFromNthBack = function(n) {
	let i = 1
	let pointerA = this
	while(i <= n){
		i++
		pointerA = pointerA.next
	}
  console.log('--->', pointerA.val)
  let j = 0;
	let last = this
	for(let cur = pointerA; cur !== null; cur = cur.next){
		if(cur.next === null) {
			if(n === 1){
				last.next = null
			} else {
				//console.log('cur =', cur.val)
				//console.log('n =', last.next.val)
				const temp = last.next.next
				last.next = temp
				last.next.val = temp.val
			}
		}
		pointerA = pointerA.next
		last = last.next
	}
}

ListNode.prototype.selfReverse = function() {
	let node = this
	let previous = null
	while(node){
		//console.log(node.val)
		const tempNode = node.next
		node.next = previous
		previous = node
		node = tempNode
		//console.log(tempNode)
	}
	return previous
}


const listA = new ListNode('1')
listA.next = new ListNode('2')
listA.next.next = new ListNode('3')
const re = listA.selfReverse()
//console.log("==",listA, "--->",re)

/*
listA.next.next.next = new ListNode('4')
listA.next.next.next.next = new ListNode('5')

//const node = listA.deleteNode('y')
listA.deleteFromNthBack(1)
console.log(listA.next)
*/
/*
function mergeLists (listX, listY) {
	let sumList;
	let i = listX
	let j = listY
	let perviousI = new ListNode(null)
	let counter = 0

	while(counter < 20){
		console.log(counter, i.val, j.val, "perviousI =", perviousI)
			if(j.next === null){
				//sumList = i
				break
			}
			if(i.next === null){
				//perviousI.next = j
				//sumList = perviousI
				break
			}
		if(i.val < j.val) {
			perviousI = new ListNode(i.val)
			console.log("---->>>> i<j per =", perviousI, i)
			i = i.next
		}
		if(i.val >= j.val) {
			//insertToiList(j.val)
			if(perviousI.val === null) {
				perviousI.val = j.val
				perviousI.next = i
				i = perviousI
			} else {
				perviousI.val = j.val
				perviousI.next = j
				j.val = null
				const saveNext = j.next
			  j.next = null
			  j = saveNext
			}
		}
		counter ++
	}
	return sumList
}
*/
// This works is because of JS copy by reference thing... in swift this will not work :( 
// The more logical way would be write a prototype of add, so there is new list, and kept being added to
// when collect is iterating to the next when and after comparison.  Errrrr JS!!!!
const testJSCopyMethod = testV => {
		let mutableV = new ListNode("h")
		let copyV = mutableV
		let counter = 0
		while(counter < 3){
			mutableV.next = new ListNode(counter)
			//console.log(counter, "mutableV =", "copyV =", copyV)
			mutableV = mutableV.next
			counter++
		}
}
testJSCopyMethod("x")

const mergeList = (listI, listJ) => {
		let collect = new ListNode(null)
		let prev = collect

		let i = listI
	  let j = listJ
		let counter = 0
		while(i !== null && j !== null){
			 counter++
			 console.log("counter =", counter, "-->>>>",prev)
			 if(i.val < j.val) {
			 collect.next = i
			 //console.log("---->>>> i<j", i.val, ">>",collect)
			 i = i.next
			 collect = collect.next
		} else {
			collect.next = j
			//console.log("----<<<<-- i>j", j.val, ">>",collect)
			j = j.next
			collect = collect.next
		}
	}
	
	if (i === null) {
    collect.next = j
	}
	if (j === null) {
		collect.next = i
	}
	return prev
}
//🤩🤩🤩
//This method is better regardless of taking advantage of the programing language
const recurMethodMerge = (i, j) => {
		if (i === null) return j
		if (j === null) return j
		if (i.val < j.val){
			i.next = recurMethodMerge(i.next, j)
			return i
		} else {
			j.next = recurMethodMerge(j.next, i)
			return j
		}
}

let listI = new ListNode(2)
listI.next = new ListNode(5)

let listJ = new ListNode(3)
listJ.next = new ListNode(7)

const recurResult = recurMethodMerge(listI, listJ)
console.log("===re",recurResult)



