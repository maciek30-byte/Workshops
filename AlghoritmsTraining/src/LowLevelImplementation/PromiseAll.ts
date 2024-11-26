export class MyPromiseAll<TValue> {
  promisesArray: Promise<TValue>[] = [];

  all() {
    return new Promise((resolve, reject) => {
      let countOfResolvedPromises = 0;

      this.promisesArray.forEach((promise) => {
        const resultsArray: TValue[] = [];

        promise
          .then((result) => {
            resultsArray.push(result);
            countOfResolvedPromises++;

            if (countOfResolvedPromises === this.promisesArray.length) {
              resolve(resultsArray);
            }
          })
          .catch(reject);
      });
    });
  }
}

const customPromiseRace =<T> (arrayPromises: Promise<T>[])=>{
    return new Promise((resolve, reject)=>{
        arrayPromises.forEach((promise)=>{
            Promise.resolve(promise).then((res)=> resolve(res), err=> reject(err))
        })
    })

}

const sleep = (ms:number)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve, ms)
    })
}


