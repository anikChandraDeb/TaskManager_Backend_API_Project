import { DecodeToken } from "../utility/tokenUtility.js";

export default (req,res,next) =>{
    let token = req.headers['token'];

    let decoded = DecodeToken(token);

    if(decoded===null){
        res.status(401).send({"status":"fail","message":"Unauthorized"});
    }
    else{
        //email, user_id take from decoded token
        let email = decoded.email;
        let user_id=decoded.user_id;
        //email,user_id add with request header
        req.headers.email=email;
        req.headers.user_id=user_id;
        next();
    }
}