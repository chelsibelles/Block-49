class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Inorder Traversal 
    inorderTraversal() {
        let current = this.root;  // Start from the root
        let stack = [];           // Initialize an empty stack
        let result = [];          // Initialize an array to store the traversal order

        while (current !== null || stack.length > 0) {
            // Go to the leftmost node
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }

            // Pop from the stack and visit the node
            current = stack.pop();
            result.push(current.value);

            // Go to the right subtree
            current = current.right;
        }

        return result;  // Return the result array
    }
}

// Example:

// Create the binary tree
//       1
//      / \
//     2   3
//    / \
//   4   5

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

// Call the inorderTraversal method and print the result
console.log(tree.inorderTraversal());  // Output: [4, 2, 5, 1, 3]
