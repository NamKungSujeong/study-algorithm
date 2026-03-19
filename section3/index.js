// 뱌열과 오브젝트의 성능 평가

// 객체의 빅오
// 객체는 정렬이 필요없고 빠른 접근, 입력, 제거시에 좋음
// 객체는 입력, 제거, 접근 모두 O(1)의 시간 복잡도를 가짐
// 하지만 탐색은 O(N) 시간임
// Object.keys, Object.values, Object.entries 모두 O(N)

// 배열 안의 데이터 접근이 느린 이유

// 배열에 가장 중요한 점은 정렬이 되어 있다는 것
// 정렬이 필요 없다면 성능 최적화를 위해 굳이 사용하지 않는 것이 좋음

// 배열의 접근은 O(1)로 빠름, 접근이란 array[index]로 값을 뽑아내는 것
// 탐색은 O(N)
// 입력과 제거는 어디에서 하는냐에 따라 다른게
// push, pop 처럼 배열 끝 입력, 제거는 O(1)
// shift, unshift 처럼 배열 앞에 입력, 삭제는 O(N) => 배열의 인덱스를 새로 배정해야 하기 때문

// 배열 메소드와 Big O
// push O(1)
// pop O(1)
// shift O(N)
// unshift O(N)
// concat O(N) => 여러개의 배열을 합침
// slice O(N)
// splice O(N)
// sort O(N * logN)
// forEach, map, filter, reduce... O(N)

// 배열로 할 수 있는 것은 거의 다 O(N)
