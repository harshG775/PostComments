const express = require('express');
const path = require('path');
const {v4:getId}=require("uuid")
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.set("views", path.join(__dirname,"public"))
app.set("view engine","ejs")

app.use(express.urlencoded({extended:true}));
app.use(express.json())

const comments= [
    {   
        id:getId(),
        username:"harsh",
        comment:"Setting overflow to scroll or auto will display scrollbars to reveal the additional text, while hidden will not. The hidden text can be selected by selecting the ellipses."
    }
]

app.get("/post", (req, res) => {
    res.render('post/index.ejs',{post:"this is the post",comments});
});


/*create part of CRUD*/
app.post("/post/comment/new",(req,res)=>{
    const{username,comment}=(req.body)
    comments.push({username,comment})
    res.redirect("/post")
})

/*updating part of CRUD*/
app.post("/post/comment/edit/:id",(req,res)=>{
    console.log(req.params)
})



const port =3000
app.listen(port, () => {
    console.log(`server started at port  http://localhost:${port}`);
});
