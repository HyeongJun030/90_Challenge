const score = [50, 100, 68, 25, 31, 77, 91]

score.some( num => num >= 75 )

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

who.some( person => person.year <= 1995 )