# @param {String} s
# @return {Integer}
def first_uniq_char(s)
  s = s.split('')
  p = s.clone
  uniq = s.uniq
  uniq_char = ""
  uniq.each do |x|
    c = p.count(x)
    p.delete(x) if c > 1
    if c == 1
      uniq_char = x
      break
    end
  end

  if uniq_char.empty?
    return -1
  else
    return s.index(uniq_char)
  end
end
