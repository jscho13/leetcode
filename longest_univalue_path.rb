# @param {TreeNode} root
# @return {Integer}
def longest_univalue_path(root)
  return 0 if !root
  ans = 0
  queue = []
  queue.push(root)
  
  while !queue.empty?
    deq = queue.shift
    lc = 0
    rc = 0
    sum = 0

    if deq.left
      lc = pn_help(deq.left, deq)
      queue.push(deq.left)
    end

    if deq.right
      rc = pn_help(deq.right, deq)
      queue.push(deq.right)
    end
    
    sum = lc + rc
    ans = sum if sum > ans
  end

  ans
end

def pn_help(n, pn)
  if n.val != pn.val
    return 0
  end
  
  lc = if n.left != nil
        pn_help(n.left, n)
      else
        0
      end
  rc = if n.right != nil
        pn_help(n.right, n)
      else
        0
      end
  
  return lc > rc ? lc + 1 : rc + 1
end
