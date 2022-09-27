const mongoose = require('mongoose')

let carSchema = mongoose.Schema({
    make: { type: String },
    model: { type: String },
    owner: { type: mongoose.Types.ObjectId, ref: 'users' }
})

let car = mongoose.model('cars', carSchema);


const getCar = async (body) => {
    let { query } = body
    query = query || {};

    await car.find(query).populate('owner', '_id name age ')
}


module.exports = {
    getCar
}