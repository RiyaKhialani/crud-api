const express = require("express");
const app = express();
const PORT = 3000;

const itemRoutes = require("./routes/items");

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the CRUD API!");
});

// Use item routes
app.use("/items", itemRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
