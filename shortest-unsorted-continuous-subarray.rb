# @param {Integer[]} nums
# @return {Integer}
def find_unsorted_subarray(nums)
  ary = nums.sort
  
  while !nums.empty? && !ary.empty? && nums[0] == ary[0] do
    nums.shift
    ary.shift
  end
  
  while !nums.empty? && !ary.empty? && nums[nums.length-1] == ary[ary.length-1] do
    puts(nums[nums.length-1])
    nums.pop
    ary.pop
  end
  
  nums.length
end
