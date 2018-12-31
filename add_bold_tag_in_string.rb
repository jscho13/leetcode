require 'set'
require 'pry'

# @param {String} s
# @param {String[]} dict
# @return {String}
def add_bold_tag(s, dict)
  limit = dict.map(&:length).max*2
  dict = dict.to_set
  parsed_list = []
  # you want to iterate through the string
  s.each_char do |c|
    parsed_list << c
    parsed_list = bold_list(parsed_list, dict, limit) 
  end

  parsed_list = parse_list(parsed_list) 
  parsed_list.join('')
end

def bold_list(list, dict, limit)
  min = ([list.length, limit].min) * -1
  # What do you do when a big word matches and there have been small word matches?
  # How do you keep track of the big word matches?
  # you want to get all combinations of the compare string
  (min..-1).each do |n|
    if list[n]
      # you want to use values negative to the length
      comparison = list[n..-1].join
      if dict.include?(comparison)
        list.insert(n-1, '<b>')
        list.push('</b>')
      end
    end
  end

  list
end

def parse_list(list)
  counter = 0
  list.each_with_index do |i, idx|
    # 1) nested tags
    # you remove the small word matches
    unless counter == 0
      # keep track of each open, expect that many closes, and delete the ones within as long as the loop is considered 'open'
      if i == '<b>'
        counter += 1
        list.delete_at(idx)
      end

      if i == '</b>'
        if counter > 1
          list.delete_at(idx)
        end
        counter -= 1
      end
    else
      # 2) tags next to each other are left alone
      counter += 1 if i == '<b>'
    end
  end
end

a = add_bold_tag('bigwordhere', ["word","bigwordhere"])
puts a

