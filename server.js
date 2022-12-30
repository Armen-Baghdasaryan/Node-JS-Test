const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();
const postRoutes = require("./routes/post-routes");
const apiPostRotes = require("./routes/api-post-routes");
const contactsRoutes = require("./routes/contact-routes");
const createPath = require("./helpers/create-path");

const app = express();

app.set("view engine", "ejs");

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Listening port ${process.env.PORT}`);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("styles"));

app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.use(postRoutes);
app.use(contactsRoutes);
app.use(apiPostRotes);

app.use((req, res) => {
  const title = "Error";
  res.status(404).render(createPath("error"), { title });
});
