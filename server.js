const express = require('express');
const bodyParser = require('body-parser');
const CategoryRoutes = require("./routes/routes-category.js");
const SendIssueRoutes = require("./routes/routes-sendIssue.js");
const IssuesRoute = require("./routes/routes-issues");

const app = express();

app.use(bodyParser.json()); 

app.use(CategoryRoutes);
app.use(IssuesRoute);
app.use(SendIssueRoutes);

const port = process.env.PORT || 31902;

app.listen(port, ()=> console.log(`Server started on port ${port}`));
