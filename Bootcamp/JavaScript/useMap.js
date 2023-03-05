// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

// 객체 사용
const people = [
    {
        name : 'Hong',
        score : 100
    },

    {
        name : 'Park',
        score : 90
    },

    { 
        name : 'Lee',
        score : 77
    },

    {
        name : 'Kim',
        score : 50
    }, 

    {
        name : 'Cho',
        score : 10
    }
]

const who = people.map( function( person ) {
    return person.name;
})