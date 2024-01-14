
import express from "express";
import  jwt  from "jsonwebtoken";
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

//app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.json());
app.use(cors(
    {
    origin:["http://localhost:3000"],
    methods:["POST , GET"],
    credentials:true
   }
))

const Db = mysql.createConnection({
    host:"localhost",
    user : "root",
    password : '12345678',
    database : "employee_database",

})
Db.connect((err) => {
  if (err) {
    console.log("Error in DB conennection" + JSON.stringify(err, undefined, 2));
  } else {
    console.log("DB Connected Successfully");
  }
});

//Login
app.post('/login',(req,res)=>{
    const sql ="SELECT * FROM login where UserName = ? and Password = ? ";
    Db.query(sql,[req.body.UserName, req.body.Password],(err,data)=>{
        if(err) return res.json({Message:"Server side Error"});
        if(data.length > 0 ){
            const name =data[0].name;
            const token= jwt.sign({name},"our-jsonwebtoken-secret-key",{expiresIn:'1d'});
            res.cookie('token',token);
            return res.json({Status:"Success"})
        }
        else{
            return res.json({Message:"Please Enter Correct Username or Password"})
        }
    })
})

//Getting Data from DataBase

app.get('/Home', (req,res) => {
    const sql = "SELECT * FROM employee";
    Db.query(sql,(err,result) =>{
        if(err) return res.json({Message: "Error inside Server"});
        return res.json(result)
    })
})

app.listen(5000,()=>{
    console.log("Api is Running")
})