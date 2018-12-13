# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits)
  ans = digits
  popped = ans.last
  popped == nil ? ans = [0] : ans = ans.join.to_i+1
  ans = ans.to_s.chars.map(&:to_i)

  ans
end
