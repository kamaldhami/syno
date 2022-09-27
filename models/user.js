const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    name: { type: String },
    age: { type: String },
    cars: [{ type: mongoose.Types.ObjectId, ref: 'cars' }],
})

let user = mongoose.model('users', userSchema);


const getUser = async (body) => {
    let { query } = body
    query = query || {};
    
    await user.find(query).populate('cars', '_id model make')
}


module.exports = {
    getUser
}