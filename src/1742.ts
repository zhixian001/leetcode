function countBalls(lowLimit: number, highLimit: number): number {
  // 10^0 (1) ~ 10^5 (100000)
  // min box number : 1
  // max box number : 45
  const boxNum: Record<number, number> = {};
  
  for (let num = lowLimit; num <= highLimit; num++) {
      const chosenBox = num.toString().split("").reduce((left, right) => left + parseInt(right), 0);
      
      boxNum[chosenBox] = boxNum[chosenBox] ? boxNum[chosenBox] + 1 : 1;
  }
  
  return Object.entries(boxNum).sort((left, right) => right[1]- left[1])[0][1];
};
