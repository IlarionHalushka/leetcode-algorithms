// fast and slow pointers
var middleNode = function(head) {
    let fasthead = head;
    while(fasthead && fasthead.next) {
        head = head.next;
        fasthead = fasthead.next.next;
    }
    return head;
};

// first count the length of the list and then
// let i = 0; i < Math.floor(count / 2); i++)