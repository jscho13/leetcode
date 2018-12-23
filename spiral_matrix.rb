# @param {Integer[][]} matrix
# @return {Integer[]}
def spiral_order(matrix)
  return [] if matrix.empty?
  # initialize
  i, xaxis, yaxis, direction, idx_list = 0, 0, 0, 'right', []
  # top, right, bottom, left limits
  t, r, b, l = matrix.length, matrix[0].length, 0, -1
  max_len = matrix.length * matrix[0].length

  while i < max_len
    case direction
    when 'right'
      while xaxis < r
        idx_list << {x: xaxis, y: yaxis}
        xaxis += 1
        i+=1
      end
      xaxis -= 1
      yaxis += 1
      r -= 1
      direction = 'up'
    when 'up'
      while yaxis < t
        idx_list << {x: xaxis, y: yaxis}
        yaxis += 1
        i+=1
      end
      xaxis -= 1
      yaxis -= 1
      t -= 1
      direction = 'left'
    when 'left'
      while xaxis > l
        idx_list << {x: xaxis, y: yaxis}
        xaxis -= 1
        i+=1
      end
      xaxis += 1
      yaxis -= 1
      l += 1
      direction = 'down'
    when 'down'
      while yaxis > b
        idx_list << {x: xaxis, y: yaxis}
        yaxis -= 1
        i+=1
      end
      xaxis += 1
      yaxis += 1
      b += 1
      direction = 'right'
    else
      raise 'Invalid direction'
    end
  end

  idx_list.map{|h| matrix[h[:y]][h[:x]]}
end
