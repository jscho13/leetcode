# @param {Integer} num_courses
# @param {Integer[][]} prerequisites
# @return {Boolean}
def can_finish(num_courses, prerequisites)
  # Create course hash
  course_list = Hash.new
  num_courses.times do |x|
    course_list[x] = []
  end

  # Populate course hash and return false for obvious course conflicts
  prerequisites.each do |c|
    course_list[c.first] << c.last
    return false if c.first == c.last || course_list[c.last].include?(c.first)
  end

  # Check for circular dependencies
  queue = []
  course_list.each do |key, val|
    if val.empty?
      queue << key
      course_list.delete(key)
    end
  end
  ans = resolve_courses(course_list, queue)
  return false if ans != {}

  return true
end

def resolve_courses(course_list, queue)
  # there can be multiple dependencies for each course
  # check for all of them
  # if there is no dependency you are safe
  while queue.empty? == false
    course_list.each do |key, val|
      course_list[key] -= queue
    end

    queue = []
    course_list.each do |key, val|
      if course_list[key].empty?
        queue << key
        course_list.delete(key)
      end
    end
  end

  course_list
end
