import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import "./edit.js";
import App from "./edit.js";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="col">
      <div class="col-md-12 col-sm-8">
        <div className="mt-1 float-end">
          <div className="ps-2 pe-2 fw-bold" style={{ color: "green" }}>
            <BsCheckCircleFill />
            Published
            <button className="btn btn-secondary gray-btn ms-2">
              <FaEllipsisV />
            </button>
          </div>
        </div>
        <hr></hr>
        <App />
      </div>
    </div>
  );
}

export default AssignmentEditor;
