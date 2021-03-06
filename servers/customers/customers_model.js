const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        year: { type: Number, required: true },
        month: { type: String, required: true },
        day: { type: Number, required: true }
    },
    address: {
        type: String,
        required: true
    },
    credentials: {
        email: { type: String, required: true },
        password: { type: String, required: true }
    }
})

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;