const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IssueSchema = new Schema({
  issue_title: {
    type: String,
    required: true,
  },
  issue_text: {
    type: String,
    required: true,
  },
  created_by: {
    type: String,
    required: true,
  },
  assigned_to: {
    type: String,
    default: null,
  },
  status_text: {
    type: String,
    default: null,
  },
  created_on: {
    type: Date,
    default: Date.now(),
  },
  open: {
    type: Boolean,
    default: true,
  },
  project: {
    required: true,
    type: String,
  },
});

mongoose.model('issue', IssueSchema);
