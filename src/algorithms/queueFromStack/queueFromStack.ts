import { Stack } from '../../dataStructures/stacks/stack';

class Queue {
  first: Stack;
  second: Stack;

  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(data: any) {
    this.first.push(data);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const data: () => any = this.second.pop();

    while (this.second.peek) {
      this.first.push(this.second.pop());
    }

    return data;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const data: () => any = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
  }
}
