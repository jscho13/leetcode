# @param {Integer[]} height
# @return {Integer}
def trap(land)
  return 0 if land.empty?
  peaks = land.each_with_index.select {|n,idx| n == land.max}.map(&:last)
  range = [land[0..(peaks.first)].reverse]
  if peaks.length > 1
    peaks.each_with_index do |valley, idx|
      range << land[valley..peaks[idx+1]] if idx != peaks.length-1
    end
  end
  range << land[peaks.last..-1]

  sum = 0
  range.each do |well|
    sum += calc_water(well)
  end
  
  sum
end

def calc_water(land)
  peak, water = land.shift, 0
  return 0 if land.empty?
  trap_index = land.each_with_index.select {|n,idx| n == land.max}.map(&:last).last
  trap_height = land[trap_index]
  subland = land[trap_index..-1]

  land[0..trap_index].each do |x|
    water += trap_height - x if x < trap_height
  end

  if subland.length == 1
    return water
  else
    water += calc_water(subland) 
  end
end
