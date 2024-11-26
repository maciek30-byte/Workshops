//@ts-ignore
export class MyArr<T> {
  length = 0;
  data: T = {} as T;

  getIndex(index: number) {
    return this.data[index];
  }

  push(item: T) {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  delete(index: number) {
    const itemToRemove = this.data[index];
    this.shiftItems(index);
    this.length--;

    console.log(itemToRemove);
  }

  private shiftItems(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}
