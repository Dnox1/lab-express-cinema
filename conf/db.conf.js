const mongoose = require('mongoose');
const MONGO_URI = "mongodb://localhost:27017/LAB-EXPRESS-CINEMA";

mongoose.connect(MONGO_URI, {useNewUrlParser: true})
  .then(() => console.info("It works!!!!!"))
  .catch(error => console.info("aaa", error))





// TODO: setup the database connection and log the connection status



