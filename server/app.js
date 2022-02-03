const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
// const Author = require('./models/book');
// const authorData = require('./book_data.json');
const cors = require('cors');
const app = express();
app.use(cors());
mongoose.connect('mongodb+srv://varun_1997:1234test@cluster0.ld7g0.mongodb.net');
mongoose.connection.once('open', () => {
    console.log("Connected To DB");
});

// TO Add Data in the DB
// authorData.forEach(val => {
//     const author = new Author({
//         name: val.name,
//         genre: val.genre,
//         authorId: val.authorId
//     });
//     author.save();
// });
// console.log("DONE!");

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Now Listening on port 4000");
})