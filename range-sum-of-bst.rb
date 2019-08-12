def range_sum_bst(root, l, r)
  q = [root]
  sum = 0
  
  while !q.empty?
    n = q.shift;
    if !n.nil? && !n.val.nil?
      q.push(n.left)
      q.push(n.right)
      sum += n.val if l <= n.val && n.val <= r
    end
  end
  
  sum
end
