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

/////////////////////////////////////////////////////////////////////////
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
console.log(plus())  // NaN 출력

function plus_1(num) {
    if (typeof num !== 'number'){
        console.log('숫자를 입력하세요')
        return 0
    }
    return num +1
}


//////////////////////////////////////////////////////////////////////////////////////
// 매개변수 패턴

function sum(a, b = 1) {
    return a+b
}

console.log(sum (1,2))  // 3
console.log(sum(7))     // b =1 이므로 8출력

// 구조분해할당
const user = {
    name : "hyoeun",
    age : 23
}
// 구조분해 할당문법 // const { name } = user
function getName({ name }){
    return name
}
function getEmail({ email = "이메일이 없습니다" }){
    return email
}
// email 값이 없을경우 이메일 없다고 출력

console.log( getName( user ))

// 메개변수의 배열 분해 할당
const fruits = ['apple', 'banana', 'cherry']
const numbers = [1,2,3,4,5,6,7]

function getSecondItem([, b ]){  // [a, b, c]
    return b
} // 배열 분해 할당 

console.log(getSecondItem(fruits))  // banana
console.log(getSecondItem(numbers)) // 2

// 나머지 매개변수
// 매개변수가 몇개이던지 받은 인수를 모두 사용

function sum0(...rest){ // 받은 인수 모두를 받아서 배열로 처리한다. 

    console.log(arguments) // arguments는 유사배열이니까 reduce메소드를 못씀

    return rest.reduce(function (acc, cur){ 
    // reduce 메소드는 배열 갯수만큼 콜백함수를 호출한다.
        return acc + cur  
        // acc는 누적으로 합해지고 cur값이 변하면서 값이 모두 더해진다.
    }, 0) // 0부터 시작함.
}

console.log(sum0(1,2))
console.log(sum0(1,2,3,4,5))


////////////////////////////////////////////////////////////////////////////////
// 화살표 함수
// function sum1 () { }
// const sum1 = function () { }
// const sum = () => { }

function sum3 (a,b) {
    return a+b 
}

// function 키워드가 없음. , 바로 리턴 가능 , 한줄로 작성가능
const sum4 = (a,b) => a+b

console.log(sum4(1,2))


// 화살표 함수 ( Arrow function)

const a = () => {}  
const b = x => {}   // 매개변수가 하나면 소괄호 생략 가능.
const c = (a,b) => {}  
const d = x => x*x  // 리턴키워드 생략 가능함.
const f = x => {
    console.log()  // 리턴키워드 생략불가능
    return x*x  
}
const g = () => {return {a : 1}}
const h = () => ( {a: 1} ) // 바로 객체 반환 가능. 객체 데이터는 소괄호로 묶어야함.
// 소괄호 안에 있는것은 객체 데이터이다. 
const i = () => [1,2,3]  // 바로 배열데이터 반환

/////////////////////////////////////////////////////////////////////////
// 즉시 실행함수

const a0 = 7

const double = () =>{
    console.log(a0 * 2)
}
double()

;(() =>{
    console.log(a0 * 2)
})()   // 즉시 실행 함수

;(() => {})()        // (F)()
;(function() {} )()  // (F)()
;(function () {} ()) // (F())
;!function () {} ()  // !F()
;+function () {} ()  // +F()

;((a,b) => {
    console.log(a.innerWidth)
    console.log(b.body)
})(window,document)  
// 전역정보를 함수에 넣고 함수 내에서는 다른 변수를 씀으로써 난독화가 가능함.

//////////////////////////////////////////////////////////////////
// 콜백 (Callback)

const a_1 = callback => {
    console.log('콜백함수를 호출하기 위한 함수')
    callback()   // 콜백은 함수데이터임. // 콜백함수 호출
}

const a_2 = () => {
    console.log('난 콜백함수')
}
// a_2 함수는 콜백함수임.

// 콜백함수 : 함수가 실행될때 인수로 들어가는 또 하나의 함수를 콜백함수라고 함.
a_1(a_2)

const sum_call = (a, b, c) => {  // c는 함수로 받음
    setTimeout(() => {
        // 콜백함수
        c(a+b)  // a+b를 value 가 받아서 
    }, 1000)   // 1초 뒤에 실행됨.
}

sum_call(4, 1000, (value) => {  // 세번쨰 인자로 함수 데이터를 보냄.
    console.log(value)
})

///////////////////////////////////////////////////////////////////
// https://www.gstatic.com/webp/gallery/4.jpg
let imgEl
const loadImage = (url , cb) =>{
    imgEl = document.createElement('img')  // document에 img태그를 생성
    imgEl.src = url              // 그 이미지 src속성에 url 을 넣어줌. 
    imgEl.addEventListener('load', () => { 
        // 'load'이벤트가 실행 이미지 주소가 로드가 끝나면 해당 콜백 함수를 실행
        setTimeout(() => {
            cb(imgEl)
        },1000)
    })
}

const containerEl = document.querySelector('.container')
loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
    containerEl.innerHTML = ""
    containerEl.append(imgEl)
})

////////////////////////////////////////////////////////////
// 재귀함수 (Recursive)

let index = 0

const recursive = () => {
    console.log('재귀함수', index)
    index+=1
    if (index<4){
        recursive()
    }
}

recursive()

const userA = {name : 'userA', parent : null}
const userB = {name : 'userB', parent : userA}
const userC = {name : 'userC', parent : userB}
const userD = {name : 'userD', parent : userC}

const recursive_user = (user) =>{
    if (user.parent){
        return recursive_user(user.parent)
    }
    return user
}

console.log(recursive_user(userC))

/////////////////////////////////////////////////////////////////////////
// 호출 스케줄링

const hello_1 = () => {
    console.log('hello')
}

const timeout = setInterval(hello_1, 2000) // 2초마다 함수실행됨.

imgEl.addEventListener('click', () => {
    console.log('click')
    clearInterval(timeout) // 타이머를 해제함.
})

////////////////////////////////////////////////////////////////////////
// this 키워드
// 일반 함수의 this는 호출 위치에서 정의
// 화살표 함수에서의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의
// [렉시컬 : 함수가 동작할 수 있는 유효한 범위]

const user_this = {
    firstname : "hyoeun",
    lastname : "cho",
    age : 23,
    getFullName : () => {  
        // 화살표 함수는 자신이 선언된 밖에 함수에서 this를 정의함.
        return `${ this.firstname } ${this.lastname}`
        // this는 자신이 호출된 위치에서 정의
    }
}
console.log(user_this.getFullName())

//      화살표 함수
function user_this2 () {
    this.firstname = "neo"
    this.lastname = "anderson"
    return {
        firstname : "hyoeun", // 프로퍼티
        lastname : "cho",
        age : 23,
        getFullName : () => {   // 메소드
            return `${ this.firstname } ${this.lastname}`
            // this는 자신이 호출된 위치에서 정의
            // neo anderson 을 return 함.
        }
    }
}
const u = user_this2()
console.log(u.getFullName())


//         일반 함수
function user_this3 () {
    this.firstname = "neo"
    this.lastname = "anderson"
    return {
        firstname : "hyoeun", 
        lastname : "cho",
        age : 23,
        getFullName() { // function 키워드 생략 가능.  
            return `${ this.firstname } ${this.lastname}`
            
        }
    }
}
const lewis = {
    firstname : 'Lewis',
    lastname : 'Yang'
}
const u2 = user_this3()
console.log(u2.getFullName())
console.log(u2.getFullName.call(lewis)) // lewis가 호출됨.

const timer = {
    title : "Timer!",
    timeout () {
        console.log(this.title)
        setTimeout(() => {
            console.log(this.title)
        }, 1000)
    }
}

timer.timeout()