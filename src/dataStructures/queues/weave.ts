import { Queue } from './queue';

const weave = (queueOne: Queue, queueTwo: Queue): Queue => {
  let queueThree = new Queue();

  while (queueOne.peek() || queueTwo.peek()) {
    if (queueOne.peek()) {
      queueThree.add(queueOne.remove());
    }

    if (queueTwo.peek()) {
      queueThree.add(queueTwo.remove());
    }
  }

  return queueThree;
};
