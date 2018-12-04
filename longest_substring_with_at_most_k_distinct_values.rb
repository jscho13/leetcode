# @param {String} s
# @param {Integer} k
# @return {Integer}
def length_of_longest_substring_k_distinct(s, k)
  alphabet_clean = { 'a': false, 'b': false, 'c': false, 'd': false, 'e': false, 'f': false, 'g': false, 'h': false, 'i': false, 'j': false, 'k': false, 'l': false, 'm': false, 'n': false, 'o': false, 'p': false, 'q': false, 'r': false, 's': false, 't': false, 'u': false, 'v': false, 'w': false, 'x': false, 'y': false, 'z': false }
  alphabet = alphabet_clean.clone

  k_list = []
  k_counter = 0
  return_value = 0
  substring = ""

  s.each_char do |c|
    substring << c

    if alphabet[c.to_sym] == false
      k_list << c
      k_counter += 1
      alphabet[c.to_sym] = true
    end
    
    if k_counter > k
      first_char = k_list.shift
      k_counter -= 1
      alphabet[first_char.to_sym] = false

      last_index = nil
      substring.each_char.with_index do |ch, idx|
        last_index = (ch == first_char) ? idx : last_index
      end
      substring.slice!(0..last_index) unless last_index.nil?
    end

    if k == 0
      return_value = 0
    else
      return_value < substring.length ? return_value = substring.length : return_value
    end
  end

  return return_value
end
