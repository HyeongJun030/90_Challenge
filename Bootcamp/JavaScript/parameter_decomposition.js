// const user =
//     {
//         name : 'Hong',
//         age : 20,
//         phone : '01011111111'
//     };

//     function who( {name, age} ) {
//         return `${name}의 나이는 ${age}입니다.`;
//     }

//     who(user);

const user = [
    {
        name: "Hong",
        age: 20,
        phone: "01011111111",
    },

    {
        name: "Park",
        age: 25,
        phone: "01022222222",
    },

    {
    name: "Lee",
    age: 15,
    phone: "01033333333",
    },

    {
        name: "Cho",
        age: 30,
        phone: "01055555555",
    },

    {
        name: "Kim",
        age: 40,
        phone: "01066666666",
    }
]

// user.filter( (user) => user.age >= 30)
// user.filter( ({age}) => age >= 30)   // 인수값으로 객체의 특성을 사용합니다.


user.map( ( {name, age, phone} ) => {
    return `${name}의 나이는 ${age}이며, 핸드폰 번호는 ${phone}입니다.`;
})