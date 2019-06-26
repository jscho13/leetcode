# @param {Integer[]} arr
# @return {Void} Do not return anything, modify arr in-place instead.
def duplicate_zeros(arr)
  insert = false
  arr.each_with_index do |x, idx|
    if insert
      insert = false
      next
    end
    
    if x == 0
      insert = true
      arr.insert(idx,0)
      arr.pop
    end
  end
end
