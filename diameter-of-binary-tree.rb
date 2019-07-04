# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Integer}
def diameter_of_binary_tree(n)
  return 0 if n == nil

  left = dfs_search(n.left, 0, 0)
  right = dfs_search(n.right, 0, 0)

  [left[:sum], right[:sum], left[:height] + right[:height]].max
end

def dfs_search(n, sum, height)
  return { sum: 0, height: 0 } if (n == nil)

  left = dfs_search(n.left, sum, height+1)
  right = dfs_search(n.right, sum, height+1)

  sum = [left[:sum], right[:sum], left[:height] + right[:height]].max
  height = [left[:height], right[:height]].max

  { sum: sum, height: height+1 }
end
