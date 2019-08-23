const axios = require('axios');

// Getting the 20 most popular films from themoviedb.org
getFilmTitles = async (req, res) => {
    var filmTitles = []
    // Getting hidden authentication key using dotenv module
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.APY_KEY + '&sort_by=popularity.desc')
    .then(films => {
        // Extracting the title from each film
      films.data.results.forEach(film => {
          filmTitles.push(film.title)    
      })
      return res.status(200).json({
            success: true,
            data: filmTitles,
            message: 'Films delivered.',
        })
    })
    .catch(error => {
        return res.status(404).json({
            error, message: 'Films not found.',
        })
    })
}

module.exports = {
    getFilmTitles,
}
