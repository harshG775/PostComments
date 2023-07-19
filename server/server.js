const express = require('express');
const app = express();
// app.use(express.urlencoded({extended:true}));
// app.use(express.json())

app.get('/api/data', (req, res) => {
    res.json({ users: ["userOne", "userTwo", "userThree"] });
});

const port = 4000
app.listen(port,'0.0.0.0', () => { console.log(`server started on localhost:${port}`) });