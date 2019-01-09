# @param {String} s
# @return {String}
def shortest_palindrome(s)
  max = s.length - 1
  pointer = s.length
  s_ary = s.split('')
  parsed_chars = []
  l = 0
  s_ary.each_with_index do |x, idx|
    parsed_chars << x
    palin_finder = parsed_chars.join('')
    if palin_finder == palin_finder.reverse && palin_finder.length != 1
      l = palin_finder.length 
    end
  end

  ans = if l == 0
          (parsed_chars.drop(1).reverse + s_ary).join('')
        else
          (parsed_chars.drop(l).reverse + s_ary).join('')
        end
  ans
end

