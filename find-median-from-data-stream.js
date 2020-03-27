/**
 * initialize your data structure here.
 */

class MedianFinder {
	// S(n)
  constructor() {
    this.nums = [];
  }
  
	// O(logn)
  addNum = (num) => {
    if (this.nums.length === 0) {
      this.nums.push(num);
      return;
    }
    
    let l=0;
    let r=this.nums.length;
    while (l<=r) {
      let mid = Math.floor((l+r)/2);
      if (this.nums[mid] < num) {
        l=mid+1;
      } else if (this.nums[mid] > num) {
        r=mid-1;
      } else {
        l = mid;
        break;
      }
    }
    
    this.nums.splice(l, 0, num);
    return;
  }

	// O(n)
  findMedian = () => {
    let length = this.nums.length;
    let mid = Math.floor(length/2);
    return (length%2 === 1) ? this.nums[mid] : (this.nums[mid]+this.nums[mid-1])/2;
  }
};

