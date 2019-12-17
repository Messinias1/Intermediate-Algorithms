// **
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
var findTilt = function(root) {
  const getTiltAndSum = node => {
    if (node == null) {
      return [0, 0];
    }
    const sumOfRight = getTiltAndSum(node.right);
    const sumOfLeft = getTiltAndSum(node.left);

    return [
      Math.abs(sumOfRight[1] - sumOfLeft[1]) + sumOfRight[0] + sumOfLeft[0],
      sumOfRight[1] + sumOfLeft[1] + node.val
    ];
  };
  return getTiltAndSum(root)[0];
};
