// Problem => https://leetcode.com/problems/diameter-of-binary-tree/

// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */


 function height(root){
    if(!root) return 0;
    const ls = height(root.left);
    const rs = height(root.right);
    return 1 + Math.max(ls, rs);   
}


var diameterOfBinaryTree = function(root) {
    if(!root) return 0;
    const ld = diameterOfBinaryTree(root.left);
    const rd = diameterOfBinaryTree(root.right);
    const r = height(root.left) + height(root.right);
    const max = Math.max(ld, Math.max(r, rd));
    return max;
};

diameterOfBinaryTree([1,2,3,4,5])
diameterOfBinaryTree([1,2])