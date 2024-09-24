//Define TreeNode class
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//Function to calculate the height of the tree
function treeHeight(node) {
    let height = 0;
    while (node !== null) {
        height ++;
        node = node.left // All the way to the left for height
    }
    return height;
}

//Define the countNodes function
function countNodes(root) {
    if (root === null) {
        return 0;
    }
    
    //Calculate the height of left and right subtrees
    let leftHeight = treeHeight(root.left);
    let rightHeight = treeHeight(root.right);

    if (leftHeight === rightHeight) {
        //Use formula 2^H-1
        return Math.pow(2, leftHeight + 1) - 1;
    } else {
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
}

//Test the function
//        10
//      /   \
//     11   12
//    /  \  / \
//  13  14 15 16
let root = new TreeNode(10);
root.left = new TreeNode(11);
root.right = new TreeNode(12);
root.left.left = new TreeNode(13);
root.left.right = new TreeNode(14);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(16);

//Call countNodes function and print result
console.log(countNodes(root)); // Output: 7