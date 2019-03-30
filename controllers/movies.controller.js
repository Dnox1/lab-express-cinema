const Movie = require ('../models/movie.model')
const createError = require('http-errors')
module.exports.list = (req, res, next) => {
  // TODO: Render movies/list with all database movies

  const criteria = {};
  const search = req.query.search;
  if (search) {
    const exp = new RegExp(search, 'i');
    criteria.$or = [
      {  title: exp },
      { description: exp }
    ]
    // AND MODE:
    // criteria.title = exp;
    // criteria.description = exp;
  }

  Movie.find(criteria)
   .then(movies => {
     console.log(movies);
     res.render('movies/list', {movies})
   })
   .catch(error => next(error));
}
module.exports.detail = (req, res, next) => {
  // TODO: Render movies/list with all database movies
  const id = req.params.id;
  Movie.findById(id)
  .then(movie => {
    if(movie){
      res.render('movies/detail', {movie})
    }else {
      next(createError(404, 'Movie not found'))
    }
  })
  .catch(error => next(error));
}

// TODO: movie detail action