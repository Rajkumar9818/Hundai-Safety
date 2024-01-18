import express from "express";
import jwt from "jsonwebtoken";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

//app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST , GET, PUT, DELETE"],
    credentials: true,
  })
);

const Db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "employee_database",
});
Db.connect((err) => {
  if (err) {
    console.log("Error in DB conennection" + JSON.stringify(err, undefined, 2));
  } else {
    console.log("DB Connected Successfully");
  }
});

//Login Api
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login where UserName = ? and Password = ? ";
  Db.query(sql, [req.body.UserName, req.body.Password], (err, data) => {
    if (err) return res.json({ Message: "Server side Error" });
    if (data.length > 0) {
      const name = data[0].name;
      const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", {
        expiresIn: "1d",
      });
      res.cookie("token", token);
      return res.json({ Status: "Success" });
    } else {
      return res.json({ Message: "Please Enter Correct Username or Password" });
    }
  });
});

//Getting Data from DataBase Api

app.get("/Home", (req, res) => {
  const sql = "SELECT * FROM employee";
  Db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside Server" });
    console.log(result, "reslt");
    return res.json(result);
  });
});

//insert Api
app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO employee (`user`,`emailId`,`role`, `status`) VALUES (?)";
  console.log(req.body);
  const values = [
    req.body.user,
    req.body.emailId,
    req.body.role,
    req.body.status,
  ];
  Db.query(sql, [values], (err, result) => {
    if (err) return res.json({ Message: "Error inside Server" });
    return res.json(result);
  });
});
app.get("/read/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM employee WHERE ID = ${id}`;
  console.log(id);
  Db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error Inside server" });
    return res.json(result);
  });
});

//Update Api

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const sql = "UPDATE employee SET user=?,emailId=?,role=?,status=? WHERE id=?";
  console.log(id);
  Db.query(
    sql,
    [req.body.user, req.body.emailId, req.body.role, req.body.status, id],
    (err, result) => {
      if (err) return res.json({ Message: "Error inside server" });
      console.log(result);
      return res.json(result);
    }
  );
});

//delete Api

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM employee WHERE ID = ?";
  Db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.get("/dealerclaim/", (req, res) => {
  const sql = "SELECT * FROM dealerclaim";
  Db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error there is no data");
    }
    if (data.length > 0) {
      return res.send(data);
    } else {
      return res.json("Error");
    }
  });
});
app.get("/violation/", (req, res) => {
  const sql = "SELECT * FROM violationcateggorie";
  Db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error there is no data");
    }
    if (data.length > 0) {
      return res.send(data);
    } else {
      return res.json("Error");
    }
  });
});

app.get("/model/", (req, res) => {
  const sql = "SELECT * FROM modelwise";
  Db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error there is no data");
    }
    if (data.length > 0) {
      return res.send(data);
    } else {
      return res.json("Error");
    }
  });
});

app.listen(5000, () => {
  console.log("Api is Running");
});
