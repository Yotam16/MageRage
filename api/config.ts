const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mageragelogin", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("DB connection successful");
})
.catch((error) => {
    console.log("DB connection failed:", error);
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("users", LoginSchema);

export default collection;