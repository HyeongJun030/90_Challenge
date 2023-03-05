// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// numbers.filter( n => {
//     return n < 10   // 10 미만의 모든 수가 따로 모여서 1부터 9까지 필터링된 새 배열을 만듭니다.
// })

// 객체에서 사용
const people = [
    {
        name : 'Hong',
        score : 100
    },

    {
        name : 'Kim',
        score : 90
    },

    { 
        name : 'Lee',
        score : 80
    }, 

    {
        name : 'Park',
        score : 50
    },

    {
        name : 'Cho',
        score : 10
    }
]

const who = people.filter( person => {
    return person.score > 50
})