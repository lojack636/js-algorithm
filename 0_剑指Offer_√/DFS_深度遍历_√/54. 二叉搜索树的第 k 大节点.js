/* 
给定一棵二叉搜索树，请找出其中第k大的节点。

! 树的深度遍历
将中序遍历按照右、中、左遍历即可---即可得到由大到小的数组

*时间复杂度 O(n)，空间复杂度：O(1)
*/
/* 
let res, curK;

var kthLargest = function(root, k) {
    curK = k;
    DFS(root);
    return res;
};
// 右---中--左
var DFS = (root) => {
    if(root == null) {
        return;
    }
    DFS(root.right); //2  1
    if(curK == 0) {
        return;
    }
    curK--; // 1
    if(curK == 0) {
        res = root.val;
    }
    DFS(root.left);
} */
// ! 

var kthLargest = function(root, k) {
  let count = 0
  let res
  const helper = (root) => {
      if(!root) return
      helper(root.right)
      if(++count === k) return res = root.val
      helper(root.left)
      
  }
  helper(root)
  return res
};