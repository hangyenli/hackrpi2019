let express = require('express');
let request = require('request');
let app = express();
app.use(express.static('public'));
let port = 3000;

app.get('/', (req, res) => res.sendfile('public/demo.html'));
app.get('/rod', (req, res) => res.sendfile('public/RodAnimation.html'));
app.get('/animal', (req, res) => res.sendfile('public/animal.html'));
app.get('/data', (req, res) => res.sendfile('public/animal.html'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://honghao:li988168@cluster0-bze0a.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true});
client.connect(err => {
    const collection = client.db("hackrpi").collection("animal");
    // perform actions on the collection object
    // collection.insertMany([
    //     {a: 1}, {a: 2}, {a: 3}
    // ], function (err, result) {
    //
    //     console.log("Inserted 3 documents into the collection");
    //     console.log(result);
    // });
    client.close();
});
