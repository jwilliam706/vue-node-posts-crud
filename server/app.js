const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const posts = require('./controllers/posts_controller');

const  mongoose = require('mongoose');
mongoose.connect('mongodb://william:william2018@ds249418.mlab.com:49418/vue-posts',{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

app.use('/posts',posts);

app.listen(process.env.PORT || 8081)