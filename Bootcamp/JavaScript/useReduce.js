const numbers = [9, 4, 3, 7, 1, 5, 2, 6, 8];

// const total = numbers.reduce( (total, number) => {
//     return total + number;
// })

// 기존에 합계를 위해 사용하던 방법
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let total = 0;
// for ( let sumNumbers of numbers ) {
//     total += sumNumbers
// }

// console.log(total);

const minNumber = numbers.reduce( (min, num) => {
    if(num < min) {
        return num; 
    }
    return min;
})

const who = [
    {
        name : 'Hong',
        score : 100,
        year : 1988
    },

    {
        name : 'Park',
        score : 95,
        year : 1996
    },

    {
        name : 'Lee',
        score : 80,
        year : 2000
    },

    {
        name : 'Kim',
        score : 75,
        year : 2005
    },

    {
        name : 'Cho',
        score : 60,
        year : 1995
    }
] 

const whosBest = who.reduce( (bestScore, theirScore ) => {
    if( theirScore.score > bestScore) {
        return theirScore;
    }
    return bestScore;
})

const evens = [2, 4, 6, 8];
evens.reduce( (sum, num) => sum + num, 100)