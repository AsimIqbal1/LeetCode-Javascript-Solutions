// Problem => https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var threeSumClosest = function(nums, target) {
    let closestSum = 9999999;
    nums.sort((a,b) => a-b);
    
//     for(let i=0;i<nums.length-2;i++){
//         for(let j=i+1;j<nums.length-1;j++){
//             for(let k=j+1;k<nums.length;k++){
//                 //i+j+k > closeset
                 
                
//                 if(Math.abs(closestSum) > Math.abs(nums[i] + nums[j] + nums[k] - target)){
//                     closestSum = nums[i] + nums[j] + nums[k] - target;
//                 }
//             }
//         }
//     }
    
    for(let i=0; i<nums.length-2; i++){
        let j = i+1;
        let k = nums.length - 1;
        let closest = 9999999999;
        while(j<k){
            let x = nums[i];
            let y = nums[j];
            let z = nums[k];
            
            let currSum = x+y+z;
            if(Math.abs(currSum - target) < Math.abs(closest - target)){
                closest = currSum;//-3
            }
            //means increase the current sum
            if(currSum > target){
                k--;
            } else if(currSum < target){//decrease the sum
                j++;
            } else {
                closest = currSum;
                return closest;
            }
        }
        if(Math.abs(closest - target) < Math.abs(closestSum - target)){
            closestSum = closest
        }
    }
    

    return closestSum;
};