# @param {String} address
# @return {String}

# T(n)
# O(1)

def defang_i_paddr(address)
  idx = 0
  while idx < address.length do
    if address[idx] == '.'
      address[idx] = '[.]'
      idx += 2
    end
    
    idx+=1
  end
  
  address
end
