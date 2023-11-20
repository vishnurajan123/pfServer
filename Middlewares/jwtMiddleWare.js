const jwt = require('jsonwebtoken')

const jwtMiddleWare=(req,res,next)=>{
    console.log("Inside jwtMiddleware");
    const token=req.headers['authorization'].split(" ")[1]
    try{
        const jwtResponse=jwt.verify(token,"supersecretkey12345")
        console.log(jwtResponse);
        req.payload=jwtResponse.userId
        next()
    }
    catch(err){
        res.status(401).json("Autherization required please login")
    }

}
module.exports=jwtMiddleWare