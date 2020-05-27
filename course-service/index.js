const express = require('express')
const cors = require('cors')

const app = express()
const port = 8888
app.use(cors());
app.get('/', (req, res) =>{
     res.send({
    "courses": [
        "Docker",
        "CSS",
        "HTML",
        "OOP"
    ]
});
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))