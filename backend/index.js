const express = require("express");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let quotes = [
  { id: 1, text: "Life is what happens when you're busy making other plans." },
  { id: 2, text: "The way to get started is to quit talking and begin doing." },
  {
    id: 3,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  },
  {
    id: 4,
    text: "The future belongs to those who believe in the beauty of their dreams.",
  },
  { id: 5, text: "In the middle of difficulty lies opportunity." },
];


const db = require('better-sqlite3')('data.db');

db.prepare('CREATE TABLE IF NOT EXISTS quotes (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT NOT NULL)').run();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/quotes", (req, res) => {
  res.json(quotes);
});

 /* app.post("/quotes", (req, res) => {
  const quote = { id: quotes.length + 1, text: req.body.text };
  quotes.push(quote);
  res.status(201).json(quote);
}); */

app.get("/quotes/:id", (req, res) => {
  const quote = quotes.find((quote) => quote.id === parseInt(req.params.id));
  if (!quote) {
    return res.status(404).json({ message: "Quote not found" });
  }
  res.json(quote);
});

app.post('/quotes', (req,res) => {
  const {text} = req.body;
  const info = db.prepare('INSERT INTO quotes (text) VALUES (?)').run(text);
  res.status(201).json({id: info.lastInsertRowid, text});
})

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
