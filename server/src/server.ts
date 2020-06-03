import express from "express";

const app = express();

app.get("/users", (request, response) =>{
    console.log("Fala comiogo bb")

    response.send("Fala comigo bb!!!!")
})

app.listen("3333")
