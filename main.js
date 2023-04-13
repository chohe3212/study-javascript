// 함수
// 함수 선언문
hello()

// 아래에 작성을 했어도 맨 위에 있는것처럼 함수가 동작함. (호이스팅)
// 그래서 함수를 밑에 작성하고 함수의 내용이 궁금하면 밑에서 볼 수 있도록 함.
function hello (){
    console.log("hi")
}
hello()

// hello1() // 오류발생 ( 초기화 전에 접근 불가능하다. )

// 함수 표현식
const hello1  = function() { }

// 위 둘은 같은것 같지만 함수 호이스팅 부분에서 차이가 있음,
// 호이스팅 (Hoisting) : 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

///////////////////////////////////////////////////////////////
// 함수 반환 및 종료
function hello2 () {
    return 'hello'
}

console.log(hello2())

// 아무것도 리턴하지 않으면 undefined가 출력됨.

function plus(num) {
    return num +1
}
console.log(plus(4)) // 5출력
console.log(plus_1())  // NaN 출력

function plus_1(num) {
    if (typeof num !== 'number'){
        console.log('숫자를 입력하세요')
        return 0
    }
    return num +1
}