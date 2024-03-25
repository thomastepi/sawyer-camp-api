require("dotenv").config();
const express = require("express");
const cors = require("cors");

const newsletterRouter = require("./routes/newsletter.route");
const contactUsRouter = require("./routes/contactUs.route");

const app = express();
app.use(cors());


const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/newsletter", newsletterRouter);
app.use("/contact-us", contactUsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
