// my solution beat 30% and following is improved solution of others
// improved it adding variable index, so no need to do this.queue.shift()

var RecentCounter = function() {
    this.queue = [];
    this.index = 0;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);
    const tMinus3k = t - 3000;
    while(this.queue[this.index] < tMinus3k) {
        this.index++;
    }
    return this.queue.length - this.index;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */