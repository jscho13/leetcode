# @param {Integer[]} nums
# @return {Integer}
def find_max_consecutive_ones(nums)
  i = nums.shift 
  max = i
  nums.each do |x|
    if x == 1
      i +=1
      max = i >= max ? i : max
    else
      i = 0
    end
  end

  max
end
