const express = require("express");
const app = express();

// var mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/interview_challenge', { useNewUrlParser: true });
//
// var TransactionSchema = new mongoose.Schema({
//     trans_id: String,
//     user_id: String,
//     name: String,
//     amount: Number,
//     date: Date
// });
//
// var Transaction = mongoose.model("Transaction", TransactionSchema);
//
//
// var a = new Transaction({name: "Chase", amount: 200});
//
//
//
// a.save(function(err, a) {
//     if (err) {
//         console.log("wrong");
//     } else {
//         console.log("success!");
//         console.log(a);
//     }
// });

// Post API
// app.create();




// Get API
app.get("/getRecurringTransactions", function(req, res) {

});

app.post("/postTransactions", function(req, res) {
    console.log(req);
    var name = req.params.name;
    var amount = req.params.amount;
    res.send("Company " + name + " : " + amount + "dollars");
})


const port = process.env.PORT || 1984;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listening on port ${port}...`);
    }
});