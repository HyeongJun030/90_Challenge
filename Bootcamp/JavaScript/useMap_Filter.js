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

const who = people.filter( n => n.score > 50 )
const whoName = who.map( n => n.name )
