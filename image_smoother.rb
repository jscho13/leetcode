# @param {Integer[][]} m
# @return {Integer[][]}
def image_smoother(m)
  ans = Marshal.load(Marshal.dump(m))
  height = m.count
  width = m[0].count
  m.each_with_index do |y_row, yidx|
    y_row.each_with_index do |x_col, xidx|
      ans[yidx][xidx] =  surrounding_cells(yidx, xidx, m, height, width, ans)
    end
  end
  ans
end

def surrounding_cells(y, x, m, height, width, ans)
  cells = []
  cells << m[y][x] # self
  cells << m[y+1][x] if y+1 < height # t
  cells << m[y+1][x+1] if y+1 < height && x+1 < width # tr
  cells << m[y][x+1] if x+1 < width # r
  cells << m[y-1][x+1] if y-1 >= 0 && x+1 < width # br
  cells << m[y-1][x] if y-1 >= 0 # b
  cells << m[y-1][x-1] if y-1 >= 0 && x-1 >= 0 # bl
  cells << m[y][x-1] if x-1 >= 0 # l
  cells << m[y+1][x-1] if y+1 < height && x-1 >= 0 # tl
  (cells.inject(0){|sum, x| sum+x }/cells.length).floor
end
