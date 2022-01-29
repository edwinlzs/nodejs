function Queue() {
    items = [];
    len = 0;
}

Queue.prototype.enqueue = function enqueue(element) {
    this.len += 1;
    this.items.push(element);
}

Queue.prototype.dequeue = function dequeue() {
    if (this.len > 0) {
        this.len -= 1;
        return this.items.shift(element);
    }
    else {
        return null;
    }
}

Queue.prototype.peek = function peek() {
    if (this.len > 0) {
        return this.items[0];
    }
    else return null;
}

module.exports = { Queue }

// // old class-syntax implementation
// class Queue {
//     constructor() {
//         this.items = [];
//         this.size = 0;
//     }

//     enqueue(element) {
//         this.size += 1;
//         this.items.push(element);
//     }

//     dequeue() {
//         if (this.size > 0) {
//             this.size -= 1;
//             return this.items.shift(element);
//         }
//         else {
//             return null;
//         }
//     }

//     peek() {
//         if (this.size > 0) {
//             return this.items[0];
//         }
//         else {
//             return null;
//         }
//     }
// }