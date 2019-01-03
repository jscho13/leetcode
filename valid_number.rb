# @param {String} s
# @return {Boolean}
def is_number(s)
  # strip leading whitespace
  s = s.lstrip.rstrip.downcase
  # false if it has any characters except for e, numbers, +, or -
  return false if /[^e0-9+-\.]/.match(s)
  # false if it has no numbers
  return false if /[0-9]/.match(s).nil?
  # false if +/- is after the .
  return false if /(?<=[0-9\.])[+-]/.match(s) != nil
  # fail if two .
  return false if s.count('.') > 1
  # scientific notation
  if s.include?('e')
    # false if more then one e
    return false if s.count('e') > 1
    # split into before and after e
    s = s.split('e')
    # fail if nothing before/after e/E
    return false if s.empty?
    return false if s[0].empty?
    return false if s.length == 1
    # fail if decimal in e/E
    return false if s[1].include?('.')
    # fail if two +/-
    return false if s[0].count('-') + s[0].count('+') > 1
    return false if s[1].count('-') + s[1].count('+') > 1
    # fail if +/- isn't in start
    return false if (/(?<=[0-9])[+-]/.match(s[0]) || /(?<=[0-9])[+-]/.match(s[1])) != nil
    # fail if no number before/after  e
    return false if (/[0-9]/.match(s[0]) && /[0-9]/.match(s[1])).nil?
  # rormal notation
  else
    # fail if two +/-
    return false if s.count('-') + s.count('+') > 1
  # normal notation
  end
  # true if it passes all these things
  return true
end
