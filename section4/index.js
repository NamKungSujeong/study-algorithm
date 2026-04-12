// 문제 해결 방법

// 알고리줌이란
// 특정 작업을 달성하기 위한 과정이나 일련의 단계를 의미

// 1단계 문제의 이해
// 1. 나만의 방식으로 문제를 이해하기
// 2. 문제가 어떤 입력값을 담고 있는가를 이해
// 3. 문제에 대한 해결책에서 나와야 할 결과 생각
// 4. 문제를 해결할 수 있는 충분한 정보가 주어졌는지 생각
// 5. 이 문제에서 정말 중요한 것은 무엇인가 생각

// 빈도 카운터 Frequency Counters
// 여러 데이터와 입력값이 서로 비슷한 값으로 구성되어 있는지
// 값이 다른 값에 포함되는지 여부를 비교하거나,
// 데이터를 입력값이나 두 개 이상의 빈도 혹은 특정하게 발생하는 빈도와 비교할 때 유용

// EX) 2개의 배열을 허용하는 same이라는 함수가 있는데
// 두번째 배열의 값이 첫번째 배열의 값의 제곱이면 참을 반환
// 순서는 상관없이 그거 첫번째 배열의 값의 제곱을 다 가지고 있으면 됨

// same([1, 2, 3], [4, 1, 9]) true
// same([1, 2, 3], [1, 9]) false
// same([1, 2, 1], [4, 4, 1]) false

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }
// 이 방법은 O(n^2)의 시작 즉, 제곱의 시간이 사용되기 때문에 순진한 접근법이라고 불림

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // 두 개의 루프가 중첩 루프보다 훨씬 나음
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
    return true;
  }
}

// O(n)의 시간복잡도
