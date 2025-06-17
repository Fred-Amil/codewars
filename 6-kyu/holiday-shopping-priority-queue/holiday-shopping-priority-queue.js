class HolidayPriorityQueue {
  constructor() {
    this.queue = [];
  }
​
  addGift(giftObj) {
    this.queue.push(giftObj);
    this.queue.sort((a, b) => a.priority - b.priority);
    return this.queue.length;
  }
​
  buyGift() {
    if (this.queue.length === 0) return '';
    return this.queue.shift().gift;
  }
}
​
​
​
​
​
​
​
​
​
​
​
​
​