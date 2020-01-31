class _Node {
  val: any
  next: any

  constructor(val: any) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  length: number
  head: any
  tail: any

  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  push(val: any) {
    const newNode = new _Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
    return this
  }
}

const list = new SinglyLinkedList()
list.push('Hello')
list.push('Goodbye')
