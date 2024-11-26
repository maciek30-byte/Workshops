const myPromiseAll = <T>(promises: (() => Promise<T>)[]): Promise<T[]> => {
  if (promises.length === 0) {
    Promise.resolve([]);
  }

  const promisesResults = [] as T[];
  let resolvedCounter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise().then((results) => {
        promisesResults[index] = results;
        resolvedCounter++;

        if (resolvedCounter === promises.length) {
          resolve(promisesResults);
        }
      })
      .catch(reject)
    
    });
  });
};


const myPromiseRace =<T> (promises: (()=>Promise<T>)[]): Promise<T>=>{
    return new Promise((resolve, reject)=>{
        promises.forEach((promise)=>{
            promise()
            .then((result)=> resolve(result))
            .catch(reject)
        })
    })

}

const myPromiseAny =<T> (promises: (()=> Promise<T>)[]): Promise<T>=>{
    const agregateError = []
    let errorCounter = 0
    return new Promise((resolve,reject)=>{
        promises.forEach((promise)=>{
            promise()
            .then((value)=> resolve(value))
            .catch((e)=> {
                agregateError.push(e)
                 errorCounter ++
                }

                if(errorCounter === promises.length) reject(agregateError)
             })
    })
}

const myPromiseAllSettled =<T> (promises:(()=>Promise<T>)[]): Promise<T[]>=>{
    const result = [] as T[]

    return new Promise((resolve, reject)=>{
        promises.forEach((promise, index)=>{
            promise()
            .then((result)=>{
                result[index] = {status:"resolved", value: result}

            })
            .catch((e)=> result[index]= {status: "rejected", reason: e.message})

        })
    })

}

const myDebounce = <T>(dellayedCallback: ()=>{}, delay: number)=>{
    let timer;

    return (...args: T[])=>{
        clearTimeout(timer)

        timer = setTimeout(()=>{
            dellayedCallback(...args)
        }, delay)

    }
}