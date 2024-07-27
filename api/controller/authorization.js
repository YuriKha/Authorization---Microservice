const jwt=require('jsonwebtoken'); 

//----------------- export -------------------------
module.exports={   
    // POST  http://localhost:3006/authorization/cheakauthorization
    // {
    //     "usertoken":"some token..."
    //            ||
    //     "admintoken":"some token..."
    // }
    Authoriz:async (req, res) => {
        console.log("the req.body that you just received: ");
        console.table(req.body);
        if(req.body.usertoken){
            try {
                console.log("im in req.body.usertoken");
                jwt.verify(req.body.usertoken,process.env.KEY_FOR_USER_TOKEN);
                console.log("authorized request, you GOOD to go user");
                return res.status(200).json({Msg:"authorized request, you GOOD to go user"});
            } catch (error) {
                console.log("Not authorized request");
                return res.status(401).json({Msg:"Not authorized request"});
            }
        }else if(req.body.admintoken){
            try {
                console.log("im in req.body.admintoken");
                jwt.verify(req.body.admintoken,process.env.KEY_FOR_ADMIN_TOKEN);
                console.log("authorized request, you GOOD to go admin");
                return res.status(200).json({Msg:"authorized request, you GOOD to go admin"});
            } catch (error) {
                console.log("Not authorized request");
                return res.status(401).json({Msg:"Not authorized request"});
            }
        }else{
            console.log("you got NO token");
            return res.status(401).json({Msg:"you got NO token"});
        }
    
    }
}