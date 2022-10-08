// Problem => https://leetcode.com/problems/add-one-row-to-tree/

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