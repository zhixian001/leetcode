function restoreArray(adjacentPairs: number[][]): number[] {
  const adjMap = new Map<number, number[]>();
  
  // Map 에 Adj Pair 를 넣어 주기
  for (const adjPair of adjacentPairs) {
    adjMap.set(adjPair[0], adjMap.get(adjPair[0])?.concat(adjPair[1]) ?? [adjPair[1]]);
    adjMap.set(adjPair[1], adjMap.get(adjPair[1])?.concat(adjPair[0]) ?? [adjPair[0]]);
  }

  // 결과물 Arr
  const restoredArray = [];

  // [..., rightLeft, rightMost]
  let rightMost;  // 가장 오른쪽에 있는 값. (arr[arr.length-1])
  let rightLeft;  // 가장 오른쪽에서 왼쪽에 있는 값. (arr[arr.length-2])

  // 첫 번째 두 개의 값을 넣어준다.
  adjMap.forEach((v, k) => {
    if (v.length === 1 && restoredArray.length === 0) {
      rightMost = v[0];
      rightLeft = k;
      restoredArray.push(rightLeft);
      restoredArray.push(rightMost);
    }
  });

  // map 에서 가장 오른쪽 (rightMost) 값에 해당하는 adjacent 값들을 가져온다.
  // 그 중 가장 오른쪽에서 두 번째 (rightLeft) 에 해당하는 값이 아닌 다른 값을 새로운 rightMost 로 넣는다.
  // 만약 adjacent 목록의 길이가 1개이면 모든 array 를 완성하였으니 종료
  while (true) {
    const currentAdj = adjMap.get(rightMost);

    if (currentAdj.length === 1) {
      break;
    } else {
      const tmpRightLeft: number = rightLeft;

      rightLeft = rightMost;
      rightMost = currentAdj[0] === tmpRightLeft ? currentAdj[1] : currentAdj[0];

      restoredArray.push(rightMost);
    }
  }
  
  return restoredArray;
};

// TEST CODE

import _ from 'lodash';

const TEST_CASES1743 = [
  {input: {adjacentPairs: [[2,1],[3,4],[3,2]]}, output: [1,2,3,4]},
  {input: {adjacentPairs: [[4,-2],[1,4],[-3,1]]}, output: [-2,4,1,-3]},
  {input: {adjacentPairs: [[100000,-100000]]}, output: [100000,-100000]}
];

for (const testcase of TEST_CASES1743) {
  console.info(`TestCase: ${JSON.stringify(testcase)}`);

  const result = restoreArray(testcase.input.adjacentPairs);
  console.log(result);
  if (!_.isEqual(result, testcase.output) && !_.isEqual(result.reverse(), testcase.output)) {
    console.assert(false);
  }
}
