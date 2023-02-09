const password = prompt('Please Enter your new password');

// 비밀번호를 입력 받을 때 1. 비밀번호가 6글자 이상인가? 2. 비밀번호 사이에 공백이 없는가? 의 조건 2가지를 걸 수 있습니다.

// // 1. 비밀번호가 6글자 이상인가?
// if ( password.length >= 6 ) {
//     console.log('비밀번호를 입력하였습니다.');
// } else {
//     console.log("비밀번호가 너무 짧습니다. 6글자 이상 입력하세요.")
// }

// // 2. 비밀번호 사이에 공백이 없는가?
// if ( password.indexOf(' ') === -1) {
//     console.log('비밀번호 사이에 공백이 없습니다.');
// } else {
//     console.log('비밀번호 사이에 공백이 있습니다. 공백을 없애주세요.');
// }

// 조건 1과 조건 2를 하나로 만들기
if ( password.length >= 6 ) {  // 비밀번호가 6글자 이상인 경우에
    // 패스워드 사이에 공백이 존재하는지 판별하는 조건을 추가하여 한번 더 조건을 통과하도록 합니다.
        if ( password.indexOf(' ') === -1 ) {
            console.log('사용 가능한 비밀번호입니다.');
        } else {
            console.log('비밀번호 사이에 공백이 존재합니다. 공백을 지우고 다시 입력하여 주세요.');
        }
} else {   // 비밀번호가 6글자 미만일 때는 짧다고 알려줍니다.
    console.log("비밀번호가 짧습니다. 6글자 이상 입력하세요.");
}