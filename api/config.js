var mongoose = require("mongoose");
var connect = mongoose.connect("mongodb://localhost:27017/mageragelogin");
connect.then(function () {
    console.log("db connection succesful");
})
    .catch(function () {
    console.log("db connection failed!");
});
var LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
var collection = new mongoose.model("users", LoginSchema);
module.exports = collection;
