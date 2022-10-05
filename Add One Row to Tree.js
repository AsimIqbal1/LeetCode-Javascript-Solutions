
/* 

Problem => https://leetcode.com/problems/add-one-row-to-tree/

Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.

Note that the root node is at depth 1.

The adding rule is:

Given the integer depth, for each not null tree node cur at the depth depth - 1, create two tree nodes with value val as cur's left subtree root and right subtree root.
cur's original left subtree should be the left subtree of the new left subtree root.
cur's original right subtree should be the right subtree of the new right subtree root.
If depth == 1 that means there is no depth depth - 1 at all, then create a tree node with value val as the new root of the whole original tree, and the original tree is the new root's left subtree.

*/

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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */

var addOneRow = function(root, val, depth) {
    if(depth == 1){
        root = new TreeNode(val, root);
        return root;
    }
    
    function solve(head, currDepth){
        if(!head) return;
        if(currDepth + 1 == depth){
            //add row
            let tempLeft = head.left;
            let tempRight = head.right;
            
            head.left = new TreeNode(val, tempLeft);
            head.right = new TreeNode(val, null, tempRight);
            return;
        }
        
        solve(head.left, currDepth+1);
        solve(head.right, currDepth+1);
    }
    solve(root, 1);
    return root;
};

addOneRow([4,2,6,3,1,5], 1, 2);
addOneRow([4,2,null,3,1], 1, 3);
