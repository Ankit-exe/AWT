const express = require('express');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.send("Hello World!")
})


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
