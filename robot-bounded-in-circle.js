/**
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = (instructions) => {
	// if robot is facing north and in a different location it's NOT in a circle
	// if robot is facing north and in same location, it's fine
	// if robot is facing a different direction and in same location, it's fine
	// if robot is facing a different direction and in different location, it's fine
	let dir = 'N';
	let coord = [0,0];
	for (let i=0; i<instructions.length; i++) {
    let instruct = instructions[i];
    switch (dir) {
      case 'N':
        if (instruct === 'G') {
          coord[0]++;
        } else if (instruct === 'L') {
          dir = 'W';
        } else {
          dir = 'E';
        }
        break;
      case 'E':
        if (instruct === 'G') {
          coord[1]++;
        } else if (instruct === 'L') {
          dir = 'N';
        } else {
          dir = 'S';
        }
        break;
      case 'S':
        if (instruct === 'G') {
          coord[0]--;
        } else if (instruct === 'L') {
          dir = 'E';
        } else {
          dir = 'W';
        }
        break;
      case 'W':
        if (instruct === 'G') {
          coord[1]--;
        } else if (instruct === 'L') {
          dir = 'S';
        } else {
          dir = 'N';
        }
        break;
    }
  }

  return (dir === 'N' && JSON.stringify(coord) != '[0,0]') ? false : true;
};
