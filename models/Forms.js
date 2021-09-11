const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    u_id: {
        type: String,
        required: true
    },
    forms: [{
        formid: {
            type: String,
            required: true
        },
        form_title: {
            type: String,
        },
        formdescp: {
            type: String,
        },
        quesarray: [{
            id: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            ques: {
                type: String,
            },
            options: {
                type: [String]
            },
            optans: {
                type: [String]
            },
        }]
    }]
});

const FormsModel = mongoose.model("FormData",FormSchema);

module.exports = FormsModel;