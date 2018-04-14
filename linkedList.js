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
		console.log(node.val)
		const tempNode = node.next
		node.next = previous
		previous = node
		node = tempNode
		console.log(tempNode)
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