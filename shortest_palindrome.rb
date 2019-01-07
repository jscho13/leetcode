# @param {String} s
# @return {String}
def shortest_palindrome(s)
  max = s.length - 1
  pointer = s.length
  s = s.reverse.split('')
  i = s.length/2
  ans = s.clone
  i.times do |idx|
    if s[idx] != s[pointer-1]
      ans.insert(pointer, s[idx])
    else
      pointer -= 1 
    end
  end

	# if this isn't a palindrome, do inside out?
  ans.reverse.join('')
end

puts shortest_palindrome('ab') # bab
puts shortest_palindrome('bab') # bab
puts shortest_palindrome('abab') # babab

puts shortest_palindrome('abbaa') # aabbaa
puts shortest_palindrome('aabba') # abbaabba

puts shortest_palindrome('aabbaaa') # aaabbaaa
puts shortest_palindrome('aaabbaa') # aabbaaabbaa
