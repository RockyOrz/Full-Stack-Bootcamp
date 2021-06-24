const express = require("express");
const app = express();
const mysql = require("mysql");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Using mysql package
let conn = mysql.createConnection({
    host: "localhost",
    user: "rocky",
    password: "rocky",
    database: "fsbc",
});

conn.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connection established");
    }
});

app.get("/", (req, res) => {
    let sql = "SELECT * FROM stud_info";
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/ID/:id", (req, res) => {
    let sql = `SELECT * FROM stud_info WHERE id = ${req.params.id} LIMIT 1`;
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result.pop());
        }
    });
});

app.get("/filter", (req, res) => {
    const conditions = [];

    if (req.query.id) conditions.push(`id = ${req.query.id}`);
    if (req.query.first_name)
        conditions.push(`first_name = '${req.query.first_name}'`);
    if (req.query.last_name) conditions.push(`last_name = '${req.query.last_name}'`);
    if (req.query.age) conditions.push(`age = ${req.query.age}`);
    if (req.query.gender) conditions.push(`gender = '${req.query.gender}'`);
    if (req.query.gpa) conditions.push(`gpa = ${req.query.gpa}`);
    if (req.query.depart_id) conditions.push(`depart_id = ${req.query.depart_id}`);

    let sql =
        "SELECT * FROM stud_info " +
        (conditions.length ? "WHERE " + conditions.join(" AND ") : "");

    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/", (req, res) => {
    let sql = `INSERT INTO stud_info (first_name, last_name, age, gender, gpa, depart_id) VALUES ('${req.body.first_name}', '${req.body.last_name}', ${req.body.age}, '${req.body.gender}', '${req.body.gpa}', ${req.body.department_id})`;
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});

app.delete("/:id", (req, res) => {
    let sql = `DELETE FROM stud_info WHERE id = ${req.params.id}`;
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});

app.put("/GPA/:id", (req, res) => {
    let sql = `UPDATE stud_info SET gpa = ${req.body.gpa} WHERE id = ${req.params.id}`;
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
