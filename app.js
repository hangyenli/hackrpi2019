let express = require('express');
let request = require('request');
let app = express();
app.use(express.static('public'));
let port = 3000;

app.get('/', (req, res) => res.sendfile('public/demo.html'));
app.get('/rod', (req, res) => res.sendfile('public/rod.html'));
app.get('/animal', (req, res) => res.sendfile('public/animal.html'));
app.get('/data', (req, res) => res.sendfile('public/data.html'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://honghao:@cluster0-bze0a.mongodb.net/test?retryWrites=true&w=majority";

//userd for transform data
// const client = new MongoClient(uri, {useNewUrlParser: true});
//
// const csvFilePath='model/weather.csv';
// const csv=require('csvtojson');
// csv()
//     .fromFile(csvFilePath)
//     .then((jsonObj)=>{
//         console.log(jsonObj);
//         client.connect(err => {
//             const collection = client.db("hackrpi").collection("pastdata");
//             // perform actions on the collection object
//             collection.insertMany(jsonObj, function (err, result) {
//
//                 console.log("Inserted 3 documents into the collection");
//                 console.log(result);
//             });
//             client.close();
//         });
//     });
