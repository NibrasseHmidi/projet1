const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
// const annonceRoutes = require("./routes/annonceRoutes");
const connectDb = require("./config/connectDb");

//middelwares
app.use(express.json());

//connect db
connectDb();

app.use("/auth", authRoutes);
// app.use("/ajout", annonceRoutes);
// start server
const port = process.env.PORT || 5000;

app.listen(port, (err) =>
  err ? console.error(err) : console.log(`server is running on port ${port}!`)
);
