# Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next
  def initialize(val)
    @val = val
    @next = nil
  end
end

# @param {ListNode[]} lists
# @return {ListNode}
def merge_k_lists(lists)
  # flatten lists
  flat_list = []
  lists.each do |l|
    flat_list += list_next(l) unless l.nil?
  end

  # sort lists
  ans = sort_list(flat_list)
  ans
end

def list_next(list)
  unless list.nil?
    if list.next != nil
      return [list.val] + list_next(list.next)
    end

    [list.val]
  end
end

def sort_list(list)
  list.sort
end
