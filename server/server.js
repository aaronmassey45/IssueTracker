require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/issue');
const Issue = mongoose.model('issue');

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true }
);

const app = express();
app.use(bodyParser.json());

app.post('/api/issues/:projectName', async (req, res) => {
  const { projectName } = req.params;

  const paths = [
    'issue_title',
    'issue_text',
    'created_by',
    'assigned_to',
    'status_text',
  ];

  const body = {};

  Object.keys(req.body).forEach(key => {
    if (paths.includes(key)) {
      body[key] = req.body[key];
    }
  });

  body.project = projectName;

  const issue = new Issue({ ...body });
  await issue.save();

  res.send(issue);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
