const express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  uri = process.env.ATLAS_URI,
  connection = mongoose.connection,
  app = express(),
  port = process.env.PORT || 5000,
  usersRouter = require('./routes/users');

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);

// Connect to MongoDB
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
);
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});