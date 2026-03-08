// Big O 표기법 Big O Notation

// Big O 포기법이란?
// 여러가지 코드를 일반적으로 서로 비교하고 성능을 평가하는 방법

// const addUpTo_1 = (n) => {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }

//   return total;
// };

const addUpTo_2 = (n) => {
  return (n * (n + 1)) / 2;
};

let t1 = performance.now();
addUpTo_2(1000000000);
let t2 = performance.now();
console.log(`Time : ${(t2 - t1) / 1000}seconds`);

// 10억 계산 기준
// addUpTo_1 = 0.9625496670007706seconds
// addUpTo_2 = 0.00001087498664855957seconds

// 이렇게 시간으로 비교하는건 다양한 변수와 한계가 생길 수 있음
// 대신 컴퓨터가 처리해야하는 연산 갯수를 세면됨
// addUpTo_2의 경우 연산이 3번이 있음 (*, +, /)
// addUpTo_1의 경우 루프안에 있기 때문에 N갯수의 연산이 됨

// Big O
// 입력된 내용이 늘어날수록 알고리즘에 실행 시간이 어떻게 변하는지 설명하는 공식적인 방법
// 즉 입력된 크기와 실행시간의 관계를 말함

// O(n) = n의 값만큼 실행시간이 늘어남 ex) 루프
// O(n^2) = n의 값이 커지면 실행시간이 제곱으로 늘어남  eX) 이중 루프
// O(1) = n의 값이 커져도 실행시간은 변하지 않음
