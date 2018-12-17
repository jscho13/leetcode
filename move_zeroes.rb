# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
  count = nums.count(0)
  nums.delete(0)
  count.times { |i| nums << 0 }
  nums
end
