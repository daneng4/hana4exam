// range 함수를 작성하세요.
const range = (start, end, step = start > end ? -1 : 1) => {

    if(step === 0 || start === end){
        return [start];
    }

    // start > end && step > 0 or start < end && step < 0
    if((start - end) * step > 0)
        return [];

    let temp = start;
    end = end ?? (start > 0 ? (start = 1, temp) : (start < 0 ? -1 : 0));

    const results = [];
    for(let i = start; start > end ? i >= end : i <= end; i += step){
        if(!Number.isInteger(i)){
            i = Number(i.toFixed(1));
            results.push(i);
        }else
            results.push(i);
    }
    return results;
};

module.exports = { range };
