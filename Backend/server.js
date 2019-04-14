const express = require('express');
const bodyParser = require('body-parser');
const CategoryRoutes = require("./routes/routes-category.js");
const CategoryIssue = require("./routes/routes-issue.js");

const app = express();

app.use(bodyParser.json()); 

app.use(CategoryRoutes);
app.use(CategoryIssue);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));
module.exports = app; 