export const CalcPercentSeq = (percent: number, number: number = 50, initialValue: number): number[] => {
    const arr: number[] = [number]
    for (let i = number; i <= Number(initialValue); i++) {
        i = i + Math.round((percent / 100) * i)
        arr.push(i)
    }
    arr[arr.length - 1] = arr[arr.length - 1] - (arr[arr.length - 1] - initialValue);
    return arr
}
