const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getQuote, getName, getFood, getHobby } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/quote", getQuote )
app.get("/api/name", getName)
app.get("/api/food", getFood)
app.get("/api/hobby", getHobby)


app.listen(4000, () => console.log("Server running on 4000"));
