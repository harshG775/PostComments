const express = require('express');
// const {v4:getId }=require('uuid');
// const {apiAuth}= require("./scripts/MiddleWere.js") 

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// app.use(apiAuth)

// api key
let userData = [
    {
        username: "firstUser",
        password:"firstUser123",
        comments: {
            comment:"Lorem, ipsum dolor sit quae quasi ab, quos"
        }
    },
    {
        username:"natsu",
        password:"natsu123",
        comments:{
            comment:"how can i implement this to every route for authentication "
        }
    }
]

// string to object
function convertStringToObject(str) {
    let obj = {};
    let properties = str.split("&")
    properties.forEach(prop => {
        let keyValue = prop.split("=");
        obj[keyValue[0]] = keyValue[1]
    });
    return obj;
}

// authentication request conformation
const UserApiKey = "api_775d"

app.get("/api/:paramsData", (req, res) => {
    const dataString = req.params.paramsData;
    if (convertStringToObject(dataString).appKey === UserApiKey) {
        res.json({ massage: "welcome to api auth" }) 
    }else {
        res.json({ massage: "unauthorized api " })
    }
})


/* create */  // "http://localhost:4000/api/user/create/UserApiKey=api_775d"
app.post('/api/user/create/:paramsData', (req, res) => {
    const urlParams = convertStringToObject(req.params.paramsData);
    const apiKey=urlParams.UserApiKey;
    
    if (apiKey === UserApiKey) {

        const queryResult = userData.filter(q=>q.username===req.body.username)
        let alreadyAdded = queryResult[0]?.username !== undefined
        // console.log(alreadyAdded)

        if (!alreadyAdded) {
            const newUser = req.body
            userData.push(newUser)
            res.json(`new user:${newUser.username} added`)
            
        }else{
            res.json(`user:${queryResult[0].username} already Added`)
        }


    }else {
        res.json({ massage: "unauthorized api " })
    }

    // const urlParams = convertStringToObject(req.params.paramsData);
    // if (convertStringToObject(dataString).appKey === UserApiKey) {
    //     const user = convertStringToObject(dataString).username
    //     const QueriedUser =userData.filter(q=>q.username===user)
    //     if (QueriedUser[0]!==undefined) {
    //         res.json(QueriedUser[0])
    //     }else{
    //         res.json("user not found")
    //     }
    // }else {
    //     res.json({ massage: "unauthorized api " })
    // }
});

/* show single data */ // "http://localhost:4000/api/user/show/UserApiKey=api_775d&username=firstUser"
app.get("/api/user/show/:paramsData", (req, res) => {
    const urlParams = convertStringToObject(req.params.paramsData);
    const apiKey=urlParams.UserApiKey;
    const userQuery = urlParams.username;

    if (apiKey === UserApiKey) {
        const queryResult = userData.filter(q=>q.username===userQuery)
        res.json(queryResult)
    }else {
        res.json({ massage: "unauthorized api " })
    }
});



// // edit
// app.patch('/api/comment/edit', (req, res => {

// }))

// // delete
// app.delete('/api/comment/delete')


const port = 4000
app.listen(port, () => { console.log(`server started on localhost:${port}`) });