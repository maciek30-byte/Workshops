type PromiseStatus = 'Fullfield' | 'Pending' | 'Rejected';

export class MyPromise<TCallback extends Function, TValue> {
  private callbacks: TCallback[] = [];
  private status: PromiseStatus = 'Pending';
  private value: TValue;

  constructor(callback: TCallback) {
    try {
      callback(this.onSucess, this.onFailure);
    } catch (e: unknown) {
      if (e instanceof Error) {
        this.onFailure(e);
      }
    }
  }

  private onSucess(value: TValue) {
    if(this.status !== "Pending") return
    
    this.value = value;
    this.status = 'Fullfield';
  }

  private onFailure(value: TValue) {
    if(this.status!== "Pending") return
    
    this.value = value;
    this.status = 'Rejected';
  }

  then(callback: TCallback) {
    this.callbacks.push(callback);
  }
}

const promise = new MyPromise(resolve, reject)