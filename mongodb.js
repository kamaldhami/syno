const mongoose = require('mongoose')
const db = mongoose.connection;
const databaseOptions = {
    useNewUrlParser: true,
    keepAlive: true,
    useUnifiedTopology: true
}

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/syno', databaseOptions)

db
    .on('open', () => {
        console.log('Db Connected');
    })
    .on('error', () => {
        console.log('error in connection');
    })
    .on("close", () => {
        console.log("Database disconnected.");
    });

module.exports = mongoose;