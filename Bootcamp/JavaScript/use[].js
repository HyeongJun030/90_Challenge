// const scores = [100, 90, 80, 70, 60];

// // [] 안에 변수명을 넣고, 해당 변수에 순서대로 값을 지정합니다.
// const [firstScore, secondScore, nextScore] = scores;

// 객체 분해
const user = {
    email : 'honghong@gmail.com',
    password : 'hong1234',
    firstName : 'Hong',
    lastName : 'GilDong',
    bors : 1900,
    died : 2000,
    country : 'korea',
    state : 'unknown'
}

// const {email} = user;
// const {password} = user;
// const {firstName} = user;

const {email : mail, password : pass, firstName : first} = user;