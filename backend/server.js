const express = require("express");
const headers = require("./middleware/headers"); 
const helmet = require("helmet");
const path = require('path');

const posts = require("./routes/posts");
const users = require("./routes/users");
const comments = require("./routes/comments");


const db = require("./models/index");
db.sequelize.sync();


const app = express();
app.use(express.json());
app.use(helmet());


app.use(headers); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Route image
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use("/api/posts", posts);
app.use("/api/users", users);
app.use("/api/comments", comments);

const PORT = 8081;
app.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));