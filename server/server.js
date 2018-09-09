require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const pick = require('./utils/pick');
const isEmpty = require('./utils/isEmpty');

require('./models/issue');
const Issue = mongoose.model('issue');

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true }
);

const app = express();
app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: 'Ya mama' }));
app.use(bodyParser.json());

const issueKeys = [
  'issue_title',
  'issue_text',
  'created_by',
  'assigned_to',
  'status_text',
];

app.post('/api/issues/:project', async (req, res) => {
  const { project } = req.params;

  const body = pick(req.body, issueKeys);

  body.project = project;

  const issue = new Issue({ ...body });
  await issue.save();

  res.send(issue);
});

app.put('/api/issues/:project', async (req, res) => {
  const { project } = req.params;
  const { id } = req.body;

  try {
    const issueToUpdate = await Issue.findOne({
      project,
      _id: id,
    });
    if (!issueToUpdate) throw new Error();

    const updates = pick(req.body, [...issueKeys, 'open']);
    if (isEmpty(updates)) return res.send('no updated field sent');

    Object.keys(updates).forEach(key => {
      issueToUpdate[key] = updates[key];
    });
    issueToUpdate.updated_on = Date.now();
    await issueToUpdate.save();
    res.send('successfully updated');
  } catch (error) {
    res.send(`could not update ${id}`);
  }
});

app.delete('/api/issues/:project', async (req, res) => {
  const { project } = req.params;
  const { id } = req.body;

  if (!id) return res.send('_id error');

  try {
    const deleted = await Issue.findOneAndDelete({
      project,
      _id: id,
    });

    if (!deleted) throw new Error();

    return res.send(`deleted ${id}`);
  } catch (error) {
    return res.send(`could not delete ${id}`);
  }
});

app.get('/api/issues/:project', async (req, res) => {
  const { project } = req.params;
  const queryKeys = [...issueKeys, 'open', 'updated_on', 'created_on', '_id'];
  const queryParams = pick(req.query, queryKeys);

  const issues = await Issue.find({
    project,
    ...queryParams,
  });
  return res.send(issues);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`);
});

module.exports = app;
