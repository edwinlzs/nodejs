function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function LinkedList(head = null) {
    this.head = null;
    this.len = head === null ? 0 : 1;
}

LinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.len) {
        return -1;
    }
    let cur = this.head;
    for (let i = 0; i < index; i++) {
        cur = cur.next;
    }
    return cur.val;
}

LinkedList.prototype.addAtHead = function(val) {
    this.head = new ListNode(val = val, next = this.head);
    this.len += 1;
}

LinkedList.prototype.addAtTail = function(val) {
    this.len += 1;
    if (this.head === null) {
        this.head = new ListNode(val = val);
        return;
    }
    let cur = this.head;
    for (let i = 1; i < this.len - 1; i++) {
        cur = cur.next;
    }
    cur.next = new ListNode(val = val);
}

LinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index >= this.len) return;
    if (index === 0) {
        this.addAtHead(val);
    }
    else {
        let cur = this.head;
        for (let i = 1; i < index; i++) {
            cur = cur.next;
        }
        let nextNode = cur.next;
        cur.next = new ListNode(val=val, next=nextNode);
        this.len += 1;
    }
}

LinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.len) return;
    if (index === 0) {
        this.head = this.head.next;
        this.len -= 1;
    }
    else {
        let cur = this.head;
        for (let i = 1; i < index; i++) {
            cur = cur.next;
        }
        cur.next = cur.next.next;
        this.len -= 1;
    }
}

LinkedList.prototype.getLength = function() {
    return this.len;
}

LinkedList.prototype.getArray = function() {
    let result = [];
    if (this.len === 0) {
        return result;
    }
    let cur = this.head;
    result.push(cur.val);
    for (i = 0; i < this.len-1; i++) {
        cur = cur.next;
        result.push(cur.val);
    }
    return result;
}

module.exports = { ListNode, LinkedList }