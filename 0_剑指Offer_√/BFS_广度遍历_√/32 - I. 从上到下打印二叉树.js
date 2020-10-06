/* 
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回：

[3,9,20,15,7]

时间复杂度 O(n)，空间复杂度：O(n)
*/

var levelOrder = function(root) {
  if(root == null) {
      return [];
  }
  let queue = [];
  queue.push(root);
  let res = [];
  // 每次unshift()出来取值后，查看是否有子树值，有的话加入队列
  while(queue.length != 0) {
      let node = queue.shift();
      res.push(node.val);
      if(node.left != null) {
          queue.push(node.left);
      }
      if(node.right != null) {
          queue.push(node.right);
      }
  }
  return res;
};