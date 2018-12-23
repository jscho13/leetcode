# @param {String} s
# @return {Boolean}
def is_valid(s)
  q = []
  s.each_char do |c|
    if ['(','{','['].include?(c)
      q << c
    elsif [')','}',']'].include?(c) && closing_bracket(c) == q.last
      q.pop 
    end
  end
end

def closing_bracket(c)
  valid = if c == ')'
    '('
  elsif c == '}'
    '{'
  elsif c == ']'
    '['
  else
    false
  end
  
  valid
end
