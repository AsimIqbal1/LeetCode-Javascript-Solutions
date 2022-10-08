// Problem => https://leetcode.com/problems/my-calendar-iii/

var MyCalendarThree = function() {
    this.tm = {}
};

MyCalendarThree.prototype.book = function(start, end) {
    this.tm[start] = (this.tm[start] || 0) + 1
    this.tm[end] = (this.tm[end] || 0) - 1
    let max = 0, count = 0
    for(let val in this.tm){
        count += this.tm[val]
        max = Math.max(max, count)
    }
    return max
};

// ["MyCalendarThree","book","book","book","book","book","book"]
// [[],[10,20],[50,60],[10,40],[5,15],[5,10],[25,55]]

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */