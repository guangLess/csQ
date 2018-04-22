
function Node(val){
	this.val = val
	this.left = null
	this.right = null
}

const longPath = root => {
	if (root===null) return 0
	return Math.max(longPath(root.left), longPath(root.right)) + 1
}

const root = new Node(3)
root.left = new Node(9)
root.right = new Node(20)
root.right.left = new Node(15)
root.right.right = new Node(7)
root.right.right.left = new Node(9)
//console.log(root)
const num = longPath(root)
console.log(num)

