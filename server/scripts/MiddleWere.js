const apiKeys="harsh775d";


const apiAuth = (req,res,next) => {
    const request= req.params.apiKey;
    if (true) {
        console.log(request);
        next()
    }
    else {
        res.send("else");
    }
};

module.exports = {
    apiAuth
}