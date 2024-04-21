const express = require('express');
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'abcsimranayush123#@sql',
    database:'ayushdb'
});
db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL server: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL server as id ' + db.threadId);
  });

  app.get('/',(req,res)=>{
    
    var sql = `SELECT * FROM BLOGS`;
    db.query(sql,(err,result)=>{
        if(err){
            res.send("error while getting");
        }
        res.status(200).send(result);
    })
  })

  app.post('/login',(req,res)=>{
    var sql = `SELECT * FROM USERS WHERE UserName = '${req.body.UserName}'`;
    db.query(sql,(err,result)=>{
        if(err){
            res.send("error while logging in server");
        }
        if(result.length <=0 ){
            res.send("register first");
        }
        else{
            if(req.body.PassWord == result[0].PassWord){
                res.send("logged in");
            }else{
                res.send("WRONG PASSWORD");
            }
            
        }
    })
    
  })


   app.post('/userblogs',(req,res)=>{
    var UserName = req.body.UserName;
    var sql = `SELECT * FROM BLOGS WHERE UserName = '${UserName}'`;
    db.query(sql,(err,result)=>{
        if(err){
            res.send("error while getting users blog");
        }
        res.send(result);
    })
   })

   app.post('/create',(req,res)=>{
    var BlogTitle = req.body.BlogTitle;
    var BlogText = req.body.BlogText;
    var UserName = req.body.UserName;
    var sql = `INSERT INTO BLOGS(BlogTitle,BlogText,UserName) VALUES('${BlogTitle}','${BlogText}','${UserName}')`;
    db.query(sql,(err,result)=>{
        if(err){
            res.send("error in creating blog in server");
        }
        res.send("blog created");
    })
   })


  //getting into database or register
  app.post('/register',(req,res)=>{
    var Email = req.body.Email;
    var UserName = req.body.UserName;
    var Password = req.body.PassWord;
    var sql = `INSERT INTO USERS(Email,UserName,PassWord) VALUES('${Email}','${UserName}','${Password}')`;
    var existingUser = `SELECT * FROM USERS WHERE Email = '${Email}'`;
    db.query(existingUser,(err,result)=>{
        if(err){
            res.send("error in existinguser checking");
        }
        if(result.length>0){
            res.status(200).json({message:"user exists"});
        }
        else{
            db.query(sql,(err,result)=>{
                if(err){
                    res.send("error in api inserting")
                }
                
                res.status(200).json({message:"inserted"});
            })
        }
        
    })
    
  })
    
  app.post('/edit',(req,res)=>{
    var BlogId = req.body.BlogId;
    var BlogText = req.body.BlogText;
    var BlogTitle = req.body.BlogTitle;
    var sql =`UPDATE BLOGS SET BlogTitle="${BlogTitle}",BlogText = "${BlogText}"   WHERE BlogId = ${BlogId}`;
    db.query(sql,(err,result)=>{
        if(err){
            res.send("server problem");
        }
        res.send(result);
    })
  })

  app.post('/delete',(req,res)=>{
    var BlogId = req.body.BlogId;
    var sql = `DELETE FROM BLOGS WHERE BlogId = ${BlogId}`;
    db.query(sql,(err,result)=>{
        if(err){
            res.send("error while deleting in server api");
        }
        res.send("deleted");
    })
  })

  app.post('/search',(req,res)=>{
    var Sinput = req.body.Sinput;
    var sql = `SELECT * FROM BLOGS WHERE BLOGTITLE LIKE '%${Sinput}%'`;
    db.query(sql,(err,result)=>{
        if(err){
            res.send("error while serching in server");
        }
        res.send(result);
    })
  })


  app.listen(8081,()=>{
    console.log("server is listning");
  })