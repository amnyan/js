class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SelfOrganizingSortedList {
    constructor() {
      this.head = null;
    }
  
    add(value) {
      const newNode = new Node(value);
  
      if (!this.head || value < this.head.value) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next && current.next.value < value) {
        current = current.next;
      }
  
      newNode.next = current.next;
      current.next = newNode;
    }

    access(value) {
      if (!this.head) return null;
  
      if (this.head.value === value) return this.head.value;
  
      let current = this.head;
      let previous = null;
  
      while (current && current.value !== value) {
        previous = current;
        current = current.next;
      }
  
      if (!current) return null;
  
      if (previous) {
        previous.next = current.next;
        current.next = this.head;
        this.head = current;
      }
  
      return current.value;
    }

    print() {
      const elements = [];
      let current = this.head;
      while (current) {
        elements.push(current.value);
        current = current.next;
      }
      console.log(elements.join(" -> "));
    }
  }
  

  const list = new SelfOrganizingSortedList();
  list.add(5);
  list.add(3);
  list.add(8);
  list.add(1);
  
  list.print(); 
  
  console.log("Accessing 5:", list.access(5));
  list.print();
  
  console.log("Accessing 3:", list.access(3));
  list.print();
  