# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
  hash = {}
  nums.each_char { |x| hash[x] ? hash.delete(x) : hash[x] = true }
  hash.keys.first
end
