
function Node(val){
	this.val = val
	this.left = null
	this.right = null
}
let counter = 0
const longPath = root => {
	if (root===null) return 0
	const testMax = Math.max(longPath(root.left), longPath(root.right)) + 1
  counter++
	console.log(testMax, "counter =", counter)
	return Math.max(longPath(root.left), longPath(root.right)) + 1
}

const isBlanced = root => {
	//if root.left === null && root.right return false
	//if root.right === null && root.left return false
	console.log("--->>",root)
	if(!root) {
		return true
		}
	if ((root.left != null) && root.left.val > root.val) return false
	if ((root.right != null) && root.right.val < root.val) return false	
	if (!isBlanced(root.left) || !isBlanced(root.right)) return false
	return true
}


const root = new Node(9)
root.left = new Node(3)
root.right = new Node(20)
// root.right.left = new Node(29)
// root.right.right = new Node(25)
// root.right.right.left = new Node(21)

//const num = longPath(root)
//console.log(num)

const checkBlanced = isBlanced(root)
console.log(checkBlanced)

