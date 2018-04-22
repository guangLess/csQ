
let countL = 0
let countR = 0

function Node(val){
	this.val = val
	this.left = null
	this.right = null
}

const longPath = root => {
	console.log(root.val)
	if(root.left === null) return countL
	if(root.right === null) return countR
	longPath(root.left)
	longPath(root.right)
}

const root = new Node(3)
root.left = new Node(9)
root.right = new Node(20)
root.right.left = new Node(15)
root.right.right = new Node(7)

console.log(root)