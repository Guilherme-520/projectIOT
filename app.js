const express = require("express")
const cors = require("cors")
const lix0 = require("./conf")
app.use(express.json())
app.use(cors())
const app = express()


app.post("/", async function(req, res){
    const data = req.body
    await lixo.add(data)
    res.send("cadastrado com sucesso")
})

app.listen(8081,()=>{
    console.log("api rodando na porta 8081")
})