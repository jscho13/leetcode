# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
  return 0 if nums.empty?
  l = nums.length-1
  nums.delete_if.with_index do |x,idx|
    x == nums[idx+1] && idx != l
  end
  nums.length
end
