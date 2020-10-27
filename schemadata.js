const mongoose =require("mongoose");

const students = mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    location:{
        type: String,
        require:true
    },
    date:{
        type:Number,
        require: true
    },
    course:{
        type:String,
        require: true,
    }
});

module.exports =mongoose.model('days',students)

