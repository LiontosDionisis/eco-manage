const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const user = require("../backend/routes/user.route");

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to Database");
    app.listen(PORT, () => {
        console.log("Server running on port: " , PORT);
    })
})
.catch(err => {
    console.log("Error connecting to Database", err);
});

const cors = require("cors");
app.use(cors({
    origin: ['http://localhost:3000/']
}))


app.use("/api/user", user);

module.exports = app;