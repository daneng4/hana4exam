export const randTime = <T>(val: T): Promise<T> =>
  new Promise(resolve => setTimeout(resolve, Math.random() * 1000, val));

type promiseResult<T> = { status: "fulfilled"; value: T }
| { status: "rejected"; reason: any };

export function promiseAllSettled<T>(promises: Promise<T>[]): Promise<promiseResult<T>[]> {
  
  return new Promise((resolve) => {
    const results: promiseResult<T>[] = [];
    let count = 0;

    promises.forEach((promise, index) => {
      promise.then((val) => {
        results[index] = {status: "fulfilled", value: val};
      })
      .catch((error) => {
        results[index] = {status: "rejected", reason: error};
      })
      .finally(() => {
        count+=1;
        if(count === promises.length){
          resolve(results);
        }
      });
    });
  });
}