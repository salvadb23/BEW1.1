const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
/*
let reviews = [
  { title: "Great Review" },
  { title: "Next Review" }
]*/



app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

app.get('/', (req, res) => {
  Review.find()
    .then(reviews => {
      res.render('reviews-index', { reviews: reviews });
    })
    .catch(err => {
      console.log(err);
    })
})

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useMongoClient: true });
const Review = mongoose.model('Review', {
  title: String
});
