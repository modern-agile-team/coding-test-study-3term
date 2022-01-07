class Queue {
    constructor() {
      this.arr = [];
      this.head = 0;
      this.tail = 0;
    };
    enqueue(item) {
      this.arr[this.tail++] = item;
    };
    dequeue() {
      if (this.head >= this.tail) {
        return null;
      } else {
        const result = this.arr[this.head++];
        return result;
      };
    };
  };
  
  let queue = new Queue();
  queue.enqueue(1); // arr: [1] head: 0 tail: 1
  queue.enqueue(2); // arr: [1, 2] head: 0 tail: 2
  queue.enqueue(3); // arr: [1, 2, 3] head: 0 tail: 3
  console.log(queue.dequeue()); // 1 , head: 1 tail: 3
  console.log(queue.dequeue()); // 2 , // head: 2 tail: 3
  console.log(queue.dequeue()); // 3 , // head: 3 tail: 3
  console.log(queue.dequeue()); // null , // head: 3 tail: 3