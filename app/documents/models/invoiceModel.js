const mongoose = require('mongoose');

const InvoiceSchema = mongoose.Schema({
    uid: Number,
    dueDate: Date,
    amount: Number,
    tax: Number,
    totalAmount: Number,
    comments: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Invoice', InvoiceSchema);