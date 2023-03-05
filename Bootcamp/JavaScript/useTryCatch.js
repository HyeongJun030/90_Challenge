// try { 
//     number.toUpperCase();   // number.toUpperCase() 구문을 실행하였을 때 
// } catch {   // 에러가 발생한다면 
//     console.log('Error!');   // 'Error!' 를 출력합니다.
// }

// try / catch 연습 ----------
function callMsg(msg) {
    try { 
        console.log(msg.toUpperCase().repeat(5));
    } catch ( e ) {
        console.log(e);
        console.log('문자열을 저장하세요.');
    }
    
}
