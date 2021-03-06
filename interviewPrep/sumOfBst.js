// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} L
//  * @param {number} R
//  * @return {number}
//  */
var rangeSumBST = function(root, L, R) {
  if (root == null) return null;
  let results = 0;
  var dfs = node => {
    if (node == null) return null;

    dfs(node.left);

    if (node.val >= L && node.val <= R) {
      results += node.val;
    }

    dfs(node.right);
  };

  dfs(root);
  return results;
};
