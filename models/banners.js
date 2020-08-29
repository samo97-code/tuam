const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        image: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Banner',schema);