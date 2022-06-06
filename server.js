const express    = require ('express');
const server     = express();
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'jyuav.net',	//连接的数据库地址。（默认:localhost）
  user     : 'ppaa',		//mysql的连接用户名
  password : '123456',		// 对应用户的密码
  database : 'nodejs'  		//所需要连接的数据库的名称（可选）
});
connection.connect();
function editSql(id, is_open){

    var sqlCommand = "UPDATE lajitong SET is_open = ? WHERE id = ?";
    var sqlParams = [is_open, id];

    connection.query(sqlCommand, sqlParams, function(err, result){

        if(err){

            console.log('[UPDATE ERROR] - ',err.message);
            // return;

        }
        
    });

}

server.get('/', (req, res) => {

    console.log('welcome');
    res.send("welcome");

})

server.get('/login', (req, res) => {

    console.log(req.query);
    let{id, password} = req.query;
    
    var return_value;

    var sqlCommand = "SELECT 1 FROM users WHERE ? = ? limit 1;";
    var sqlIdParams = ["id", id];
    var sqlPasswordParams = ["password", password];

    connection.query(sqlCommand, sqlIdParams, function(err, result){

        if(err){

            console.log('[SELECT ERROR] - ',err.message);
            res.send("ERROR");
        }

        if (result.length == 0){
            return_value = 0;
            console.log("There is not this id");
            res.send("There is not this id");
        } 
        else{
            return_value = 1;
        }    

        // return return_value;

    })

})

server.get('/signup', (req, res) => {

    console.log(req.query);
    let {id, password} = req.query;

    var sqlCommand = "INSERT INTO users(id, password) VALUES(?, ?);";
    var sqlParams  = [id, password];
    
    connection.query(sqlCommand, sqlParams, function(err, result){

        if(err){

            console.log('[INSERT ERROR] - ',err.message);

        }

    });

    

});

server.get('/control', (req, res) => {

    console.log(req.query);
    let {id, is_open} = req.query;
    // console.log(id, is_open);
    editSql(id, is_open);
    console.log("edit lajitong " + id + " success");
    res.send("edit lajitong " + id + " success");
});

server.get('/search', (req, res) => {

    let {id} = req.query;
    
    

    var sqlCommand = "SELECT * FROM lajitong WHERE id = ?;";
    var sqlParams = [id];

    connection.query(sqlCommand, sqlParams, function(err, result){

        if(err){

            console.log('[SELECT ERROR] - ',err.message);
            // return;

        }
        res.send(""+result[0].is_open);
    });
    // console.log(Result);

})

server.listen(8000, () => {

    console.log('express server running at port 8000.')

})
