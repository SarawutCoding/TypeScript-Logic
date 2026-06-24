let num: number[] = [5, 6, 1, 9, 8, 4, 4, 5 , 6 , 8, 7, 6, 9];

function grade(numtest:number[]) {
    let numSum: number[] = []
    let rever:number
    for (let i = 0; i < numtest.length - 1; i++) {
        for (let j = 0; j < numtest.length - 1; j++) {
            if (numtest[j] > numtest[j + 1]) {
                rever = numtest[j + 1];
                numtest[j + 1] = numtest[j];
                numtest[j] = rever;
            } else {
                numSum = numtest;
            }
        }
    }
    return numSum;
}
console.log(grade(num));