const express = require('express');
const app = express();

app.use("/users/", require("./routes/userRoutes"))

app.listen(5000,function(){
    console.log("express is running at port 5000")
})