# @param {String} str1
# @param {String} str2
# @return {String}
def gcd_of_strings(str1, str2)
  longest = str1.length > str2.length ? str1 : str2  
  count = 0
  ans = ''
  
  while count < longest.length
    str = longest[0..count]
    gcd1 = ''
    gcd2 = ''
    gcd1 += str while (gcd1.length < str1.length)
    gcd2 += str while (gcd2.length < str2.length)

    if gcd1 == str1 && gcd2 == str2
      ans = str
    end
    count+=1
  end
    
  ans
end

# Runtime: O(n)
# Space: O(n+m)
