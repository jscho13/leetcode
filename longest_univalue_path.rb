# Definition for a binary tree node.
class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val)
    @val = val
    @left, @right = nil, nil
  end
end

# @param {TreeNode} root
# @return {Integer}
def longest_univalue_path(root)
  lc = 0
  rc = 0

  if root.class != Array
    if !root.left.nil?
      lc = root.left.val == root.val ? 1+pn_help(root.left) : pn_help(root.left)
    end
    
    if !root.right.nil?
      rc = root.right.val == root.val ? 1+pn_help(root.right) : pn_help(root.right)
    end
  end

  max = lc + rc
  max
end

def pn_help(node)
  if !node.left.nil? && (node.left.val == node.val)
    lc = 1+pn_help(node.left)
  else
    lc = 0
  end

  if !node.right.nil? && (node.right.val == node.val)
    rc = 1+pn_help(node.right)
  else
    rc = 0
  end
  
  max = lc > rc ? lc : rc
  max
end


require 'benchmark'

Benchmark.bm do |x|
  x.report {
    # 1, 4, 5, 4, 4, 5
    a = TreeNode.new(1)
    b = TreeNode.new(4)
    c = TreeNode.new(5)
    d = TreeNode.new(4)
    e = TreeNode.new(4)
    f = TreeNode.new(5)
    a.left = b
    a.right = c
    a.left.left = d
    a.left.right = e
    a.right.left = f

    puts "Test 1: expecting 2 got " + longest_univalue_path(a).to_s
  }

  x.report {
    # 1, 4, 5, 4, 4, 5
    a = TreeNode.new(5)
    b = TreeNode.new(4)
    c = TreeNode.new(5)
    d = TreeNode.new(1)
    e = TreeNode.new(1)
    f = TreeNode.new(5)
    a.left = b
    a.right = c
    a.left.left = d
    a.left.right = e
    a.right.left = f

    puts "Test 2: expecting 3 got " + longest_univalue_path(a).to_s
  }

  x.report {
    # 1
    a = TreeNode.new(1)

    puts "Test 3: expecting 0 got " + longest_univalue_path(a).to_s
  }
 
  x.report {
    #
    a = []

    puts "Test 3: expecting 0 got " + longest_univalue_path(a).to_s
  }
end
