import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const useAPI = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const { projectName } = useParams();

  const getProjectData = async () => {
    setLoading(true);
    const res = await axios.get(`/api/issues/${projectName}`);
    setLoading(false);
    setIssues(res.data);
  };

  const closeIssue = async id => {
    await axios.put(`/api/issues/${projectName}`, {
      id,
      open: false,
    });
    getProjectData();
  };

  const deleteIssue = async id => {
    await axios.delete(`/api/issues/${projectName}`, {
      data: { id },
    });
    getProjectData();
  };

  const submitNewIssue = async values => {
    await axios.post(`/api/issues/${projectName}`, {
      ...values,
    });
    getProjectData();
  };

  return {
    closeIssue,
    deleteIssue,
    getProjectData,
    issues,
    loading,
    projectName,
    submitNewIssue,
  };
};

export default useAPI;
