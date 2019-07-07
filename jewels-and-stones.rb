# @param {String} j
# @param {String} s
# @return {Integer}
def num_jewels_in_stones(j, s)
  map = {}
  count = 0

  j.each_char { |x| map[x] = 1 }
  s.each_char { |x| count += 1 if map[x] }  
  count
end

# Runtime: O(m+n)
# Space: O(n)

