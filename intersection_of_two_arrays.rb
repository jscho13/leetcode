# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer[]}
def intersection(nums1, nums2)
  nums1.uniq! 
  nums2.uniq! 
  ans = []
  nums1.each do |x|
    nums2.reverse_each do |y|
      ans << nums2.delete(y) if  x == y
    end
  end
  ans
end
