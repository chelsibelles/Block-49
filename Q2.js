//Define the Node class
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//Define isSameTree function
function isSameTree(tree1, tree2) {
    //Both trees are empty
    if (tree1 === null && tree2 === null) {
        return true;
    }
    //One tree is empty and the other is not
    if (tree1 === null || tree2 === null) {
        return false;
    }

    return (tree1.value === tree2.value) &&
    isSameTree(tree1.left, tree2.left) &&
    isSameTree(tree1.right, tree2.right);
}

//Create first binary tree
//       1
//      / \
//     2   3
let tree1 = new Node(1);
tree1.left = new Node(2);
tree1.right = new Node(3);

//Create second binary tree
//       1
//      / \
//     2   3
let tree2 = new Node(1);
tree2.left = new Node(2);
tree2.right = new Node(3);

//Create third binary tree
//       1
//      / 
//     2   
let tree3 = new Node(1);
tree3.left = new Node(2);

//Test the isSameTree function
console.log(isSameTree(tree1, tree2)); //Output: true
console.log(isSameTree(tree1, tree3)); //Output: false