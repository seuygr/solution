const express = require("express");
const app = express();

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/interview_challenge', { useNewUrlParser: true });

var TransactionSchema = new mongoose.Schema({
    trans_id: String,
    user_id: String,
    name: String,
    amount: Number,
    date: Date
});

var Transaction = mongoose.model("Transaction", TransactionSchema);


var a = new Transaction({name: "Chase", amount: 200});
a.save(function(err, a) {
    if (err) {
        console.log("wrong");
    } else {
        console.log("success!");
        console.log(a);
    }
});
app.get("/", function(req, res) {
    res.send("animal!")
})




const port = process.env.PORT || 1984;
app.listen(port, function() {
    console.log(`Listening on port ${port}...`);
});