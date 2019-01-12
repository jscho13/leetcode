# @param {string[][]} equations
# @param {Float[]} values
# @param {string[][]} queries
# @return {Float[]}
def calc_equation(equations, values, queries)
  # create reciprocals of our equations
  equations += equations.map { |x| [x.last, x.first] }
  values += values.map { |x| 1/x }

  # multiple all equations to get other equations
  equations, values = multiply_factors(equations, values)

  # store equations in a hash
  eq_hash = equations.map{|x| x.join('/') }.zip(values).to_h

  # map queries with values from eq_hash
  queries = queries.map do |q|
    x = q.join('/')
    eq_hash[x] != nil ? eq_hash[x].round(5) : -1.round(5)
  end
  
  queries
end

def multiply_factors(equations, values)
  recip_equation, recip_values = [], []
  equations.each_with_index  do |num, idx|
    equations.each_with_index do |denom, idx2|
      # calcuates solvable equations like a/b * b/c = a/c if they don't exist
      if num.first == denom.last && !equations.include?([denom.first, num.last])
        recip_equation << [denom.first, num.last]
        # a.value * c.value
        recip_values << values[idx] * values[idx2]
      end
    end
  end

  # do this until all equations have been solved
  if recip_equation.empty? == false
    equations += recip_equation
    values += recip_values
    equations, values = multiply_factors(equations, values)
  else
    [equations, values]
  end
end
