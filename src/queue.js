const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.queue;
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let newQueue = new ListNode(value);
    if (!this.queue) {
      this.queue = newQueue;
    } else {
      let currentQueue = this.queue;
      while (currentQueue) {
        if (!currentQueue.next) {
          currentQueue.next = newQueue;
          break;
        }
        currentQueue = currentQueue.next;
      }
    }
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let currentQueue = this.queue.value;
    this.queue = this.queue.next;
    return currentQueue;
  }
}

module.exports = {
  Queue
};
