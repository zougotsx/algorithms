export class Queue {
  data: any[];

  constructor() {
    this.data = [];
  }

  add(record: any) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

let newQueue = new Queue();
newQueue.add(4);
newQueue.remove();
