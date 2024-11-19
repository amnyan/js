class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    _createNode(value, next = null) {
        return { value, next };
    }

    append(value) {
        const newNode = this._createNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = this._createNode(value, this.head);
        this.head = newNode;
        this.length++;
    }

    remove(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            this.length--;
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) return;

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let previous = null;
            let count = 0;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            previous.next = current.next;
        }

        this.length--;
    }

    search(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }

        return null;
    }

    insert(value, index) {
        if (index < 0 || index > this.length) return;

        if (index === 0) {
            this.prepend(value);
        } else {
            const newNode = this._createNode(value);
            let current = this.head;
            let previous = null;
            let count = 0;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            newNode.next = current;
            previous.next = newNode;
            this.length++;
        }
    }

    reverse() {
        let previous = null;
        let current = this.head;

        while (current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.head = previous;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    toString() {
        let result = '';
        let current = this.head;

        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }

        result += 'null';
        return result;
    }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.prepend(5);
console.log(list.toString()); // Output: "5 -> 10 -> 20 -> null"

console.log(list.size()); // Output: 3

list.remove(10);
console.log(list.toString()); // Output: "5 -> 20 -> null"

list.insert(15, 1); // Insert 15 at index 1
console.log(list.toString()); // Output: "5 -> 15 -> 20 -> null"

list.reverse();
console.log(list.toString()); // Output: "20 -> 15 -> 5 -> null"

console.log(list.search(15)); // Output: Node { value: 15, next: Node { value: 5, next: null } }
console.log(list.search(100)); // Output: null
