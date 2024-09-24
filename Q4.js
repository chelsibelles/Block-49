//Define TreeNode class
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//Define the searchBottomLeftValue function
function searchBottomLeftValue(root) {
    if (root === null) {
        return null;
    }

    let queue = [root]; //Initialize the queue with the root node
    let leftmostValue = root.value; // Track leftmost value

    while (queue.length > 0) {
        let currentNode = queue.shift(); //Dequeue the first node

        //Check left child first, then right child
        if(currentNode.left !== null) {
            queue.push(currentNode.left);
        }
        if(currentNode.right !== null) {
            queue.push(currentNode.right);
        }
        //Update leftmost value to last node in queue
        leftmostValue = currentNode.value;
    }
    return leftmostValue;
}

//Test the function
//        2
//      /   \
//     1     3
//    / \   / 
//   4   5 6 
let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
root.left.left = new TreeNode (4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

//Call searchBottomLeftValue function and print result
console.log(searchBottomLeftValue(root)); // Output: 6