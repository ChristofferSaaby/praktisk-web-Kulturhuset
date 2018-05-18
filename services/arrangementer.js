const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'kulturhuset';
const arrangementCollection = 'arrangementer'

    function getAll() {
        return new Promise((resolve, reject) => {
            let MongoClient = mongodb.MongoClient;
            MongoClient.connect(url, (err, client) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }else{
                    let dbo = client.db(dbName);
                    dbo.collection(arrangementCollection)
                        .find()
                        .sort({
                            name: 1
                        })
                        .toArray((err, result) => {
                            client.close();
                            if (err) {
                                console.log(err);
                            }else{
                                console.log(result);
                                resolve(result);
                           }
                    });
                 }
            });
        });
    }

    module.exports = {
        getAll,
    }