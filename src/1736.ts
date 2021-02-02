// 1736. Latest Time by Replacing Hidden Digits
// https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/submissions/

function maximumTime(time: string): string {
  let newTime = "";

  // 시간 쪼개기
  if (time[0] === "?") {
    // 시간의 십의 자리가 와일드카드인 경우
    if (time[1] === "?") {
      // 시간의 일의 자리가 와일드카드인 경우 - 2가된다
      newTime += "2";
    } else if (parseInt(time[1]) < 4) {
      // 시간의 일의 자리가 4보다 작은 경우 - 2가 된다
      newTime += "2";
    } else {
      // 시간의 일의 자리가 4 보다 크거나 같은 경우 - 2가 될 수 없으니 1을 넣어 준다.
      newTime += "1";
    }
  } else {
    // 시간의 십의 자리가 와일드카드가 아닌 경우
    newTime += time[0];
  }

  if (time[1] === "?") {
    // 시간의 일의 자리가 와일드카드인 경우
    if (newTime[0] === "2") {
      // 시간의 십의 자리가 2 - 시간의 일의 자리의 값 max 가 2
      newTime += "3";
    } else {
      // 시간의 십의 자리가 1 이하 - 일의 자리의 값의 max 가 9
      newTime += "9";
    }
  } else {
    // 시간의 일의 자리가 와일드카드가 아닌 경우
    newTime += time[1];
  }

  newTime += ":";

  // 분 쪼개기
  if (time[3] === "?") {
    // 분의 십의 자리가 와일드카드인 경우 - max 가 5
    newTime += "5";
  } else {
    // 분의 십의 자리가 와일드카드가 아닌 경우
    newTime += time[3];
  }

  if (time[4] === "?") {
    // 분의 일의 자리가 와일드카드인 경우 - max 가 9
    newTime += "9";
  } else {
    // 분의 일의 자리가 와일드카드가 아닌 경우
    newTime += time[4];
  }

  return newTime;
};