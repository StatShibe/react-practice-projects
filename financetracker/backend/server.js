const express  = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()
const PORT = process.env.PORT || 3500

const db = require("./dbConn");
db.connect().then(() => {
    console.log("Postgres connected")
})

app.use(cors({
    credentials: true, 
    origin: "http://localhost:5173"
}));

app.use(express.urlencoded(
    {extended : true}
))

app.post("/insert", async(req, res) => {
    console.log("received")
    const result = await db.query("insert into finance values($1, $2, $3);",[req.body.description, req.body.amount, req.body.mode])
    res.sendStatus(200);
})

app.get("/show", async(req,res) => {
    const data = await db.query('SELECT * FROM FINANCE')
    res.status(200).send(data.rows)
})

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
})