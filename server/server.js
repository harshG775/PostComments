const express = require('express');
const app = express();

// app.use(express.urlencoded({extended:true}));
// app.use(express.json())
const dataBase = {
    comments:[
        {
            username:"firstUser",
            comment:"Lorem, ipsum dolor sit quae quasi ab, quos"
        },
        {
            username:"firstUser",
            comment:"Lorem, ipsum dolor sit quae quasi ab, quos"
        }
    ]
}
app.get('/api/data', (req, res) => {
    res.json({ users: ["userOne", "userTwo", "userThree"] });
});

const port = process.env.PORT || 4000
app.listen(port,'0.0.0.0', () => { console.log(`server started on localhost:${port}`) });