const map = new Map();
map.set("1002", "조깅, 팔굽혀펴기");
map.set("1003", "조깅2, 팔굽혀펴기2");

console.log(map.get("1002"));
console.log(map.get("1003"));

// Map 관련 다양한 함수 실습, 자습 시간에 필요

const set = new Set();
set.add("1002");
set.add("1003");
set.add("1002");

console.log(set.has("1002"));
console.log(set.size);

// for ... of 반복문 실습
for (const val of set) {
  console.log(val);
}

for (const val of map) {
  console.log(val);
}

// map 에서 for 문 사용해서 키값을 사용해서 값만 출력하도록 구현하시오.
for (const val of map.keys()) {
  console.log(map.get(val));
}

const nums = [1, 2, 3, 4];

const squares = nums.map((n) => n ** 2);
console.log(`squares: ${squares}`);

const evens = nums.filter((n) => n % 2 === 0);
console.log(`evens :${evens}`);

const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(`sum :${sum}`);

const found = nums.find((n) => n > 2);
console.log(`found :${found}`);

const hasNegative = nums.some((n) => n < 0);
console.log(`hasNegative :${hasNegative}`);

const allPositive = nums.every((n) => n > 0);
console.log(`allPositive :${allPositive}`);

const nested = [1, 2, 3];
const duplicated = nested.flatMap((n) => [n, n]);
console.log(`duplicated :${duplicated}`);

// 구조 분해 + 스프레드
const user = {
  name: "John",
  age: 30,
  city: "New York",
};

// let name = user.name;
// let age = user.age;
// let ci  ty = user.city;

const { name, age, city } = user;
console.log(`name :${name}`);
console.log(`age :${age}`);
console.log(`city :${city}`);

// 스프레드

// const user2 = {
//   name: user.name,
//   age: user.age,
//   city: user.city,
// }

const user2 = {
  ...user,
  name: "Jane",
};

console.log(`user2 :${user2}`);

// 템플릿 리터럴
// const name = "John";
