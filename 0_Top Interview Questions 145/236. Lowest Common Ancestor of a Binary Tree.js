// 236. Lowest Common Ancestor of a Binary Tree

var lowestCommonAncestor = function(root, p, q) {
  // 1.一旦找到，就已经是最近公共祖先了
  if(root==null || root==p ||root==q) return root;
   let left= lowestCommonAncestor(root.left,p,q)
   let right=lowestCommonAncestor(root.right,p,q)
   if(!left) return right;
   if(!right) return left;
  return root

};
