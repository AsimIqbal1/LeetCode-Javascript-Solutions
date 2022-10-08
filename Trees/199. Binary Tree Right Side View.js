// Problem => https://leetcode.com/problems/binary-tree-right-side-view/

/*
Given the root of a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.

Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
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
 * @return {number[]}
 */
 var rightSideView = function(root) {
    const ans = []
    if(!root) return [];
    
    //this obj will store level wise right most data..
    let obj = {};
    const queue = [{
        level: 0,
        node: root
    }];
    obj={
        0: root.val
    }
    while(queue.length){
        const pop = queue.shift();
        if(pop.node.right) {
            queue.push({
                level: pop.level + 1,
                node: pop.node.right
            });
        }
        if(pop.node.left){
            queue.push({
                level: pop.level + 1,
                node: pop.node.left
            });
        }
        if(obj[pop.level] == null) {
            obj[pop.level] = pop.node.val;
        }
    }
    return Object.values(obj);
};