/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // previous node.next value should be updated
    let newNode = new Node(val);

    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    }else {
      let oldLast = this.last;
      oldLast.next = newNode;
      this.last = newNode;
    }

    this.size ++;

    return

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {

    let removed;

    if(this.size === 0) throw new Error;

    if(this.size ===2){
      removed = this.first.val;

      this.first = this.last;

      this.size --;

      return removed;

    }

    if(this.size === 1){
      removed = this.first.val;

      this.first = null; 
      this.last = null;
      this.size --;

      return removed;
    }

    if(this.size > 2){
      removed = this.first.val;
      this.first = this.first.next;
      this.size --;
      return removed;
    }

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    let firstVal = this.first.val;

    return firstVal;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size === 0){
      return true;
    }else{
      return false;
    }
  }
}

module.exports = Queue;
