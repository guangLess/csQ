//linked list problems

function ListNode(val) {
	this.val = val
	this.next = null
}

ListNode.prototype.deleteNode = function(val){
		//console.log('inside list', val, this)
		if (this.val === val){
			//this.val = this.next.val
			//this.next = this.next.next
		} else {
			let current = this.next
			let previous = current
			//console.log(this)
			while(current){
				//console.log(current.val, 'previous =', previous)
				if(current.val === val) {
					previous.next = current.next
					if(previous.next.val) previous.next.val = current.next.val
				}
				current = current.next
			}

		}
}

const listA = new ListNode('y')
listA.next = new ListNode('a')
listA.next.next = new ListNode(':D')
listA.next.next.next = new ListNode('x')

const node = listA.deleteNode('x')
console.log(listA)

