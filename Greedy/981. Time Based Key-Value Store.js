// Problem => https://leetcode.com/problems/time-based-key-value-store/
var TimeMap = function() {
    this.map = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    const mapKey = `${key}-${timestamp}`;
    this.map[mapKey] = value;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    for(let i=timestamp; i>0; i--){
        const mapKey = key+'-'+i;
        if(this.map[mapKey] != undefined){
            return this.map[mapKey];
        }
    }
    
    return '';
};

// ["TimeMap","set","get","get","set","get","get"]
// [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */