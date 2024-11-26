export class HashTable {
  private data: Array<Array<[string, number]>>;

  constructor(public size: number) {
    this.data = new Array(size);
    console.log('this is data', this.data);
  }

  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key: string, value: number): void {
    let address = this.hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
  }

  get(key: string) {
    let address = this.hash(key);
    const curentBucket = this.data[address];
    console.log('this is current bucket', curentBucket);

    if (curentBucket.length > 0) {
      curentBucket.forEach((_) => {
        return curentBucket[0][0];
      });
    } else {
      return undefined;
    }
  }

  getKeys(){
    const allKeys: string[] = []

    this.data.forEach((array)=>{
        console.log("this is array ELEMENT", array[0)

    })

  
  }
}
