// // 메서드를 객체에 추가하는 방법 1
// const myMath = {   // myMath 라는 객체를 만들고 
//     multiply : function(x, y) {   // multiply 이라는 특성
//         return x * y;
//     }, 
    
//     divide : function(x, y) {   // divide 라는 특성
//         return x / y;
//     }, 
    
//     square : function(x, y) {   // square 라는 특성을 만듭니다.
//         return x * x;
//     }
// }

// // 메서드를 객체에 추가하는 방법 2
// // 기존에 사용하던 메서드 만드는 방법
// const myMath = {   // myMath 라는 객체를 만들고 
//     multiply : function(x, y) {   // multiply 이라는 특성을 만듭니다.
//         return x * y;
//     }
// }
// 새로 메서드 만드는 방법
// const myMath = {
//     multiply(x, y) {   // 특성을 따로 만들지 않고, function 키워드도 사용하지 않으며, 함수명을 사용합니다.
//         return x + y;
//     }
// }

// 최근 자바스크립트에 추가된 메서드를 객체에 추가하는 방법 ex
const myMath = {
    multiply(x, y) {
        return x * y;
    },
    
    divide(x, y) {
        return x / y;
    }, 
    
    square(x) {
        return x * x;
    }
}