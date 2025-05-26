const express = require("express");
const { PrismaClient } = require("./generated/prisma");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();
const prisma = new PrismaClient();
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// GET ROOT

app.get("/", (req, res) => {
  return res.send("Hello World");
});


// GET QUOTES

app.get("/api/quotes", async (req, res) => {
  try {
    const quotes = await prisma.quote.findMany();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed" });
  }
});


// POST QUOTES 


app.post("/api/quotes", async (req, res) => {
  const { text, author } = req.body;
  try {
    const newQuote = await prisma.quote.create({
      data: { text, author },
    });
    res.status(201).json(newQuote);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Creation failed" });
  }
});



const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
