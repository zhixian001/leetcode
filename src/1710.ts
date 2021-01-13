// 1710. Maximum Units on a Truck
// https://leetcode.com/problems/maximum-units-on-a-truck/

function maximumUnits(boxTypes: number[][], truckSize: number): number {
  // 각 boxTypes 의 첫 번째 요소로 내림차순 정렬
  boxTypes.sort((left, right) => right[1] - left[1]);

  // 상자당 unit 수가 많은 상자부터 트럭 사이즈만큼 가져오기
  let totalUnitCount = 0;
  for (let boxTypeIdx = 0; boxTypeIdx < boxTypes.length; boxTypeIdx++) {
    if (boxTypes[boxTypeIdx][0] <= truckSize) {
      totalUnitCount += boxTypes[boxTypeIdx][0] * boxTypes[boxTypeIdx][1];
      truckSize -= boxTypes[boxTypeIdx][0];
    } else {
      totalUnitCount += truckSize * boxTypes[boxTypeIdx][1];
      break;
    }
  }

  return totalUnitCount;
};


const TEST_CASES = [
  { input: { boxTypes: [[1, 3], [2, 2], [3, 1]], truckSize: 4 }, output: 8 },
  { input: { boxTypes: [[5,10],[2,5],[4,7],[3,9]], truckSize: 10 }, output: 91 },
];

for (const testcase of TEST_CASES) {
  console.info(`TestCase: ${JSON.stringify(testcase)}`);
  console.assert(maximumUnits(testcase.input.boxTypes, testcase.input.truckSize) === testcase.output);
}
