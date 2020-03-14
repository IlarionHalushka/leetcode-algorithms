/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (!this.stack.length) {
    this.stack.push({ v: x, m: x });
  } else {
    this.stack.push({ v: x, m: Math.min(x, this.stack[this.stack.length - 1].m) });
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1].v;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1].m;
};
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
