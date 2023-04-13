// 산술
console.log(7 % 5) // 나머지

function isEven(num) {
    return num % 2 === 0
}

console.log(isEven(2))

// 할당 연산자
let a = 3
a += 1
console.log(a)

// 증감 연산자
console.log (a++) // 그대로 4로 출력됨. 하지만 a는 1 증가됨  -> 4
console.log (++a) // 원래 a는 5였는데 증가된 채로 출력됨.  -> 6
console.log (a--) // -> 6
console.log (--a) // 4

////////////////////////////////////////////////////////////////

// 부정 (!)
console.log(!true) // false
console.log(!0) // false
console.log(!!0) // false
console.log(!null) // false
console.log(!{}) // false
console.log(![]) // false

// 비교
const A = 1
const B = 3

console.log(A != B)  // true

console.log(A !== B) // true

console.log(A > B) 
console.log(A => B) 

//////////////////////////////////////////////

// 논리
// AND
if (A && B){
    console.log('둘다 참')
}
// OR
if (A || B){
    console.log('하나 이상이 참.')
}

console.log(1 && 0)        // 0이 출력됨 
// && 연산자는 가장 첫번쨰 거짓 데이터를 출력함.
console.log('A' && 'B' && '')    // ''
console.log('A' && 'B' && 'C')   // 'C' 가 출력됨. 모두 참이면 가장 마지막 참을 출력함.

// OR 연산자
console.log(false || true)
console.log(1 || 0)              // 1이 출력됨.
// ||는 가장 먼저 만나는 참값이 출력됨.
console.log(false || 0 || {})                  // {} 가 출력됨.
console.log(function (){} || undefined || '')  // function 이 참이므로 출력됨.
console.log(false || 0 || NaN)                 // NaN 이 출력됨.

/////////////////////////////////////////////////////
// Nullish 병합 (??)
const n = 0
const num1 = n || 7
// OR 연산자를 사용하는 경우
console.log(num1) // 7이 출력됨.

// Nullish 연산자를 사용하는 경우
const num2 = n ?? 7
console.log(num2)      // null, undefined를 제외한 모든 데이터를 먼저 반환함.

console.log(undefined ?? 1)    // 1
console.log(null ?? undefined) // undefined

// 삼항
const i = 0
if (i < 2){
    console.log('참')
}else {
    console.log('거짓')
}

console.log(i < 2 ? '참!' : '거짓...') 
// ( 조건식 ? 참일때 : 거짓일때 )

function getAlert (message){
    return message ? message : '메세지가 없습니다.'
}
console.log(getAlert('안녕하세요'))
console.log(getAlert('')) 

//////////////////////////////////////////////////////////////////////
// 전개연산자 

const k = [1,2,3,4,5]
const l = [6,7,8]
console.log(...k)      // 펼쳐서 전개한다.
console.log(1,2,3.4,5)  // 이렇게 출력됨

const j = k.concat(l) // 배열을 병합하기
console.log(j)

const h = [...k, ...l]
console.log(h)

const m = {x:1, y:2}
const o = {z:4, y:3}

const c = Object.assign({},m,o)
console.log(c)

const d = {m,o}
console.log(d) // d = { m : {x:1, y:2} , o : {z:4, y:3} }

const f = {...m, ...o}
console.log(f) // y:2는 덮여써짐.

function fn(x,y,z){
    console.log(x,y,z)
}

fn(1,2,3)

const z = [1,2,3]
fn (a[0], a[1], a[2])  // 1,2,3
fn(z)                  // [1,2,3], undefined, undefined
fn (...z)              // 1, 2, 3  // 더 간편함.


/////////////////////////////////////////////////////////////////
// 구조 분해 할당 

let a1 = 0
let a2 = 0
let a3 = 0
const arr = [1,2,3]
//const arr0 = arr[0]
//const arr1 = arr[1]
;[a1, a2, a3] = arr // a1 = 1, a2 = 2, a3 = 3

console.log(a1, a2, a3)

const arr1 = [3,4,5]
const [a_arr, ...rest] = arr1

console.log(a_arr, rest) // 3 [4,5] // ...을 붙이면 나머지 요소들이 다 들어감.

// 객체 구조분해 할당
const obj = {
    _a : 1,
    _b : 2,
    _c : 3
}

// 배열과 다르게 key값만 알면 꺼내 쓸 수 있다. 
const { _a, _b } = obj

console.log(_a, _b)


////////////////////////////////////////////////////////////////////////////
// 선택적 체이닝
// 예외처리를 하는 용도로 선택적 체이닝을 할 수 있다. 
// 꼭 필요한 상황에서만 사용하기!

const user_a = undefined

console.log(user_a?.name)

const userA = {
    name : 'hyoeun',
    age : 23,
    address : {
        country : "Korea",
        city : "Seoul"
    }
}
const userB = {
    name : 'Neo',
    age: 12
}

function getCity (user){
    return user.address?.city || '주소 없음'
    // 에러방지 위해 ?(물음표) 뒤쪽 값이 undefined라면 실행하지 않고 바로 undefined를 반환
}
console.log(getCity(userA))
// console.log(getCity(userB)) // 해당 값이 없어서 오류남


/////////////////////////////////////////////////////////////////////////
// If 조건문

/////////////////////////////////////////////////////////////////////////
// for 반복문
// for of 반복문

const fruits_for = ['Apple','banana','cherry']

for (const a of fruits_for) {
    console.log(a)
} // 배열 값을 하나씩 출력

// for in 반복문
const user_for = {
    name : 'hyoeun',
    age : 23,
    email : 'chohe3212@naver.com'
}

for (const key in user_for){
    console.log(key)
} // key만 출력

for (const key in user_for){
    console.log(user_for[key])
} // 