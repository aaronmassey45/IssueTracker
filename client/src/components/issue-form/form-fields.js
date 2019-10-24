const formFieldsData = [
  {
    name: 'issue_title',
    placeholder: '*Title',
    required: true,
  },
  {
    name: 'issue_text',
    placeholder: '*Text',
    required: true,
    rows: 10,
  },
  {
    name: 'created_by',
    placeholder: '*Created by',
    required: true,
  },
  {
    name: 'assigned_to',
    placeholder: 'Assigned to',
    required: false,
  },
  {
    name: 'status_text',
    placeholder: 'Status text',
    required: false,
  },
];

export default formFieldsData;
