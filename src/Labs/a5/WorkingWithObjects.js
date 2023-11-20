import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const API_BASE = process.env.REACT_APP_LAB_API_BASE;
  const URL = `${API_BASE}/assignment`;
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a href={URL} className="btn btn-primary me-2">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href={URL + "/title"} className="btn btn-primary me-2">
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a href={`${URL}/title/${assignment.title}`} className="btn btn-primary me-2 float-end">
        Update Title
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text"
      />
      <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>
      <h4>Get Score</h4>
      <a href={URL + "/score"} className="btn btn-primary me-2">
        Get Score
      </a>
      <h4>Update Score</h4>
      <a href={`${URL}/score/${assignment.score}`} className="btn btn-primary me-2 float-end">
        Update Score
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment, score: e.target.value })}
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="number"
      />
      <h4>Get Completed</h4>
      <a href={URL + "/completed"} className="btn btn-primary me-2">
        Get Completed
      </a>
      <a href={`${URL}/completed/${assignment.completed}`} className="btn btn-primary me-2 float-end">
        Update Completed
      </a>
      <input
        type="checkbox"
        checked={assignment.completed}
        onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
      />
    </div>
  );
}
export default WorkingWithObjects;