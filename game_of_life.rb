# @param {Integer[][]} board
# @return {Void} Do not return anything, modify board in-place instead.
def game_of_life(board)
  # clone and clear board
  clone = Marshal.load(Marshal.dump(board))
  ymax = clone.length
  xmax = clone[0].length

  board.each_with_index do |y_row, yid|
    y_row.each_with_index do |x_row, xid|
      board[yid][xid] = calc_life(clone, yid, xid, ymax, xmax)
    end
  end
end

def calc_life(clone, yid, xid, ymax, xmax)
  sum, ans = 0, 0
  [-1,0,1].each do |y|
    [-1,0,1].each do |x|
      unless y == 0 && x == 0
        ystep = yid + y
        xstep = xid + x
        sum += (clone[ystep][xstep] || 0) if within_limit(ystep, xstep, ymax, xmax)
      end
    end
  end

  ans =
  if clone[yid][xid] == 1
    # Any live cell with fewer than two live neighbors dies, as if caused by under-population.
    if sum < 2
      0
    # Any live cell with two or three live neighbors lives on to the next generation.
    elsif sum == 2 || sum == 3
      1
    # Any live cell with more than three live neighbors dies, as if by over-population..
    else
      0
    end
  else
    # Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
    sum == 3 ? 1 : 0
  end

  ans
end

def within_limit(ystep, xstep, ymax, xmax)
  ystep < ymax && ystep >=0 && xstep < xmax && xstep >= 0 ? true : false
end
