const express    = require ('express');
const server     = express();
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '127.0.0.1',	//连接的数据库地址。（默认:localhost）
  user     : 'ppaa',		//mysql的连接用户名
  password : '123456',		// 对应用户的密码
  database : 'nodejs'  		//所需要连接的数据库的名称（可选）
});
connection.connect();

// 数据库操作
function sqlOperate(sqlCommand, sqlParams){

    return new Promise (function(resolve, reject){
        connection.query(sqlCommand, sqlParams, function(err, result){

            if(err){

                console.log('[ERROR] - ',err.message);
                resolve(-1);

            }
            else{

                console.log('[SUCCESS]', result);
                resolve(1);

            }

        });
    });

}

// 检查是否已经存在
async function checkExist(table, param, value){

    var sqlCommand = "SELECT 1 FROM " + table + " WHERE " + param + " = " + value + " limit 1";
    
    var returnValue = await sqlOperate(sqlCommand, []);

    return returnValue.length;

}

server.get('/', (req, res) => {

    console.log('welcome');
    res.send("welcome");

})

server.get('/login',async  (req, res) => {

    console.log(req.query);
    let{id, password} = req.query;

    if (checkExist("users", "id", id) == 0){
        resValue = "signup: the id is existed";
    }
    else if (checkExist("users", "password", password) == 0){
        resValue = "signup: the password is existed";
    }
    else{
        resValue = "signup: signup success";
    }

    res.send(resValue);

})

server.get('/signup',async  (req, res) => {

    var resValue;

    console.log(req.query);
    let {id, password} = req.query;

    if (checkExist("users", "id", id) == 0){
        resValue = "signup: the id is existed";
    }
    else{
        var sqlCommand = "INSERT INTO users(id, password) VALUES(?, ?);";
        var sqlParams  = [id, password];
    
        resValue = await sqlOperate(sqlCommand, sqlParams);
    } 

    res.send(resValue);

});

server.get('/control',async  (req, res) => {

    console.log(req.query);
    let {id, is_open} = req.query;

    var sqlCommand = "UPDATE garbageCans SET is_open = ? WHERE id = ?";
    var sqlParams = [is_open, id];
    
    var resValue = await sqlOperate(sqlCommand, sqlParams);
    
    res.json(resValue);

});

server.get('/search', async (req, res) => {

    let {id} = req.query;

    var sqlCommand = "SELECT * FROM garbageCans WHERE id = ?;";
    var sqlParams = [id];

    var resValue = await sqlOperate(sqlCommand, sqlParams);

    res.json(resValue);

})

server.listen(8000, () => {

    console.log('express server running at port 8000.')

})
