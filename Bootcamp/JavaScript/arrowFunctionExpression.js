// const dice = () => (
//     Math.floor(Math.random() * 6) + 1
// )

const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`
})