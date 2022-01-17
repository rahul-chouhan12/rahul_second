var dbConn = require("../config/database");
const util = require("util");
const query = util.promisify(dbConn.query).bind(dbConn);

 var data = function(value){};


data.createuser = async()=>{
    let create = await query("select * from `users`");
    console.log("create", create);
    return create;
}


data.signup=async(userdata)=>{
    let data1 = await query("select * from  user_maximum_no where user_id = (select max (user_id) from  user_maximum_no)");
    console.log("user_maximum_no : " + data1[0].user_id);

    let temp = 1;
    if(data1.length)
    {
        temp =  data1[0].user_id + temp;
    }

    let data = await query("insert into user_maximum_no (user_id) value(?)", temp);

   let result = await query("insert into `users` (`username`,`email`,`password`,`number`, user_id) values(?,?,?,?,?)",[userdata.username, userdata.email, userdata.password, userdata.number, temp]);

   console.log("userdata", result);
   return result;
}


data.login = async(userlogin) =>{
    let result = await query (" select * from users where email = ? and password = ? and is_active = 'Y' ",[userlogin.email,userlogin.password]);
    return result;
};

data.delete = async(userdelete)=>{
    let result = await query ("update users set is_active = 'N' where id = ? ",[userdelete.id]);
    return result;

}


module.exports = data;