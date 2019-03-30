const Movie = require('../models/movie.model');
const movies = require('../data/movies.json');

require('../conf/db.conf');

Movie.create(movies)
  .then(movies => console.log(`Exito`))
  .catch(error => console.error(`error fatal`, error))
  .then(() => mongoose.connection.close())