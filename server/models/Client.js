const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientSchema = new Schema({

    customer_id: {
        type: Number
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    street: {
        type: String
    },
    phone: {
        type: Number
    },
    total_price: {
        type: Number
    },
    currency: {
        type: String
    },
    cerdit_card_type: {
        type: String
    },
    cerdit_card_number: {
        type: Number
    }






}, {
    collection: 'clients'
})

module.exports = mongoose.model('Client', clientSchema)