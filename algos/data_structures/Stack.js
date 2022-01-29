function Stack() {
    items = [];
    len = 0;
}

Stack.prototype.push = function(element) {
    this.len += 1;
    this.items.push(element);
}

Stack.prototype.pop = function() {
    if (this.len > 0) {
        this.len -= 1;
        return this.items.pop();
    }
    else {
        return null;
    }
}

Stack.prototype.peek = function() {
    if (this.len > 0) {
        return this.items[this.len - 1];
    }
    else return null;
}

module.exports = { Stack }

// old class-syntax implementation
// class Stack {
//     constructor() {
//         this.items = [];
//         this.size = 0;
//     }

//     push(element) {
//         this.size += 1;
//         this.items.push(element);
//     }

//     pop() {
//         if (this.size > 0) {
//             this.size -= 1;
//             return this.items.pop();
//         }
//         else {
//             return null
//         }
//     }

//     peek() {
//         if (this.size > 0) {
//             return this.items[this.items.length-1]
//         }
//         else {
//             return null
//         }
//     }
// }