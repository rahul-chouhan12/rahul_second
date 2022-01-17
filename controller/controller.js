const dbConn = require("../config/database");
const usercon = require("../model/model");


var user = function(value){};


user.createuser =async(req, res)=>{
    let result = await usercon.createuser();
    console.log(result)
    res.send({
        data:result,
        msg:"success"
    });
};


///post user data
user.signup = async (req, res)=>{
        let userdata = req.body;
        
            console.log("username:",userdata.username);
            console.log("email:",userdata.email);
            console.log("password:",userdata.password);
            console.log("number:",userdata.number);

            let result = await usercon.signup(userdata);
            console.log("userdata", result);
            console.log("result.length : " + result.length);
            if(!result.length)
            {
                res.send({
                    data:result,
                    msg:"post user data successfully"
                });
            }
            else{        
                res.send("fail");
            }
           
        };


user.login = async (req, res)=>{
    let userlogin = req.body;
    
    console.log("email:",userlogin.email);
    console.log("password:",userlogin.password);

    let result = await usercon.login(userlogin);
    console.log("userlogin", result);
    console.log("result.length : " + result.length);
    if(!result.length)
    {
        res.send("login fail");
    }
    else{
        res.send({
            data:result,
            msg:"login successfully"
        });
    }

};



user.delete = async(req, res)=>{
    let userdelete =  req.body;
    console.log("body", req.body);
    console.log("id", userdelete.id);

    let result = await usercon.delete(userdelete);
    console.log("delete", result);
    console.log("result.length", + result.length);

    if(!result.length)
    {
        res.send("delete fail");
    }
    else{
        res.send({
            data:result,
            msg:"delete successfuly"
        });
    }

};


    module.exports = user;