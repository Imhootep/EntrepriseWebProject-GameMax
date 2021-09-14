const express = require ('express');
const app = express ();
const cors = require ('cors');

app.use(cors())
app.use(express.json())

const userRoute = require("./routes/User")
app.use ("/User", userRoute);

const uploadRoute = require("./routes/Upload")
app.use ("/upload", uploadRoute);

app.listen(8000, (req, res) =>{
    console.log('server running...');
})