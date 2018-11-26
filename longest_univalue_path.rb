require 'pry'

class TreeNode
  attr_accessor :val, :left, :right, :counter
  def initialize(val)
    @val = val
    @left = nil
    @right = nil
    @counter = 0
  end
end

# @param {TreeNode} root
# @return {Integer}
def longest_univalue_path(root)
  tree = Tree.new(root)
  tree.parse_nodes(root, 0)
  c = tree.get_max_counted

  if !tree.dual_nodes.empty?
    d = tree.parse_dual_nodes
    return d > c ? d : c
  else
    return c
  end
end

class Tree
  attr_accessor :root_node, :dual_nodes
  def initialize(root_node)
    @root_node = root_node
    @dual_nodes = []
    @all_node_counter = []
  end

  def get_max_counted
    if @all_node_counter.max == nil
      return 0
    else
      return @all_node_counter.max
    end
  end

  def parse_nodes(node, node_counter)
    if node == nil
      return nil
    end

    if !node.left.nil? && !node.right.nil?
      if node.val == node.left.val && node.val == node.right.val
        @dual_nodes << node
        dc = node.counter + 1
        node.left.counter = dc
        node.right.counter = dc
      else
        @all_node_counter << node.counter
      end

      parse_nodes(node.left)
      parse_nodes(node.right)
    end

    if !node.left.nil? && (node.left.val == node.val)
      lc = node.counter + 1
      node.left.counter = lc

      parse_nodes(node.left)
    else
      @all_node_counter << node.counter
    end

    if !node.right.nil? && (node.right.val == node.val)
      rc = node.counter + 1
      node.right.counter = rc

      parse_nodes(node.right)
    else
      @all_node_counter << node.counter
    end
  end

  def parse_dual_nodes
    left_values = []
    right_values = []
    combined_arrays = []
    @dual_nodes.each do |dn|
      left_values = check_univalues(dn.left, 1)
      right_values = check_univalues(dn.right, 1)

      combined_arrays << left_values + right_values
    end

    max_value = combined_arrays.max
    return max_value
  end

  def check_univalues(node, counter)
    if !node.left.nil? && node.left.val == node.val
      lc = counter + 1
      lc = check_univalues(node.left, lc)
    end
    
    if !node.right.nil? && node.right.val == node.val
      rc = counter + 1
      rc = check_univalues(node.right, rc)
    end

    compacted = [lc, rc, counter].compact.max
    if compacted.nil?
      return 0
    else
      return compacted
    end
  end
end


require 'benchmark'

# a=[5,4,5,1,1,5] #2
# b=[5] #0
# c=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] #8
# e=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] #6
# f=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] #14
# g=[5,4,5,1,1,5,6,1,2,3,4,5,6,7,9] #3
# 
Benchmark.bm do |x|
  x.report {
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

#   x.report {
#     puts "Test 2: expecting 0 got " + longest_univalue_path(b).to_s
#   }
# 
#   x.report {
#     a = TreeNode.new(1)
#     b = TreeNode.new(1)
#     c = TreeNode.new(1)
#     d = TreeNode.new(1)
#     e = TreeNode.new(1)
#     f = TreeNode.new(1)
#     g = TreeNode.new(1)
#     h = TreeNode.new(1)
#     i = TreeNode.new(1)
#     a.left = b
#     a.right = c
#     a.left.left = d
#     a.left.right = e
#     a.right.left = f
#     a.right.right = g
#     a.left.left.left = h
#     a.left.left.right = i
# 
#     puts "Test 3: expecting 8 got " + longest_univalue_path(a).to_s
#   }
# 
#   x.report {
#     puts "Test 5: expecting 6 got " + longest_univalue_path(e).to_s
#   }
# 
#   x.report {
#     puts "Test 6: expecting 14 got " + longest_univalue_path(f).to_s
#   }
# 
#   x.report {
#     puts "Test 7: expecting 3 got " + longest_univalue_path(g).to_s
#   }
end
