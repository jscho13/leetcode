# @param {String} s
# @param {Integer} k
# @return {Integer}
def length_of_longest_substring_k_distinct(s, k)
  distinct_list = []
  substring = ""

  s.each_char do |c|
    distinct_list << c if !distinct_list.include?(c)
  end
end
