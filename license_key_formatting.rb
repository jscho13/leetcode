# @param {String} s
# @param {Integer} k
# @return {String}
def license_key_formatting(s, k)
  output = ""
  s = s.gsub('-', '').upcase
  trim_length = s.length % k
  if trim_length > 0 && !s.slice(trim_length).nil?
    output << s.slice!(0..trim_length-1) + '-'
  end

  while s.length > 0
    output << s.slice!(0..k-1) + '-'
  end
  output.slice!(-1)
  
  output
end
