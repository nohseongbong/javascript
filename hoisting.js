/**
 * Hoisting(호이스팅)
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 * var, let, const 다 호이스팅 현상이 일어나지만 let 과 const는 initialization Error를 반환하므로써 차단한다.
 */

// var = undefined
console.log(varKeyword, ": varKeyword");
// let = Error: Cannot access 'letKeyword' before initialization
console.log(letKeyword, ": letKeyword");
// const = Error: Cannot access 'constKeyword' before initialization
console.log(constKeyword, ": constKeyword");
var varKeyword;
let letKeyword;
const constKeyword = "";
