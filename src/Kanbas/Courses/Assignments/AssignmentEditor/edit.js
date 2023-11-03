import { useState } from "react";
import db from "../../../Database";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer.js";


function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const assignmentId = pathname.slice(pathname.lastIndexOf("/") + 1);
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const [assignments, setAssignments] = useState(db.assignments);




  const courseId = useParams().courseId;

  const [title, setTitle] = useState(assignment.title);



  const [description, setDescription] = useState("jcndjksnfjk");
  const [points, setPoints] = useState("");
  const [group, setGroup] = useState("Assignments");
  const [displayGrade, setDisplayGrade] = useState("Percentage");
  const [checked, setChecked] = useState(false);

  const [textArea, setTextArea] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState(false);
  const [media, setMedia] = useState(false);
  const [annotations, setAnnotations] = useState(false);
  const [uploads, setUploads] = useState(false);

  const [assignTo, setAssignTo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [notify, setNotify] = useState(false);

  // other state for checkboxes, selects, etc

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit logic
  };

  const handleChange = () => {
    setChecked(!checked);
  };
  const navigate = useNavigate();
  // const handleSave = () => {
  //   console.log("Actually saving assignment TBD in later assignments");
  //   navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  // };



const saveEditedAssignmentName = () => {
  setAssignments((prevAssignmnets) =>
  prevAssignmnets.map((assignment) => {
      if (assignment._id === assignmentId) {
        return {
          ...assignment,
         title: title,
        };
      } else {
        return assignment;
      }
    })
  );
};

  const handleSave = () => {
    const updatedAssignment = {
      _id: assignmentId,
      title: title,
    };
  
    const updatedAssignments = db.assignments.map((assignment) =>
      assignment._id === assignmentId ? assignment :updatedAssignment
    );

  
    console.log("Assignment saved successfully");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  
  // const updateTitle = (title) => {
  //   const newTitle = assignments.map((item) =>
  //     item._id === title._id ? title : item
  //   );




  // const modules = useSelector((state) => state.modulesReducer.modules);
  // const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  console.log("assignment", assignment);


  return (
    <form onSubmit={handleSubmit}>
      <div className="col-sm-3 fw-bold">
        <p>Assignment Name</p>
      </div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control mb-4"
        placeholder="Name"
      />

      {/* Description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control mb-4"
        rows="7"
        placeholder="This the assignment description"
      ></textarea>

      {/* Points */}
      <div className="row mt-4">
        <div className="col-sm-3 fw-bold">
          <label>Points</label>
        </div>
        <div className="col-sm-8">
          <textarea
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            className="form-control"
            rows="1"
            placeholder="100"
          ></textarea>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-sm-3 fw-bold">
          <label>Assignment Group</label>
        </div>

        <div className="col-sm-8">
          <select
            value={group}
            //   onChange={handleGroupChange}
            onChange={(e) => setGroup(e.target.value)}
            className="form-control"
          >
            <option value="">Select</option>
            <option value="Assignments">Assignments</option>
            <option value="Quizzes">Quizzes</option>
          </select>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-sm-3 fw-bold">
          <label>Display Grade as</label>
        </div>

        <div className="col-sm-8">
          <select
            value={displayGrade}
            //   onChange={handleGroupChange}
            onChange={(e) => setDisplayGrade(e.target.value)}
            className="form-control"
          >
            <option value="">Select</option>
            <option value="Percentage">Percentage</option>
          </select>
        </div>
      </div>

      <div className="form-check mt-4">
        <input
          type="checkbox"
          id="countGrades"
          checked={checked}
          onChange={handleChange}
          className="form-check-input"
        />
        <label className="form-check-label">
          Do not count this assignment towards final grade
        </label>
      </div>

      <div className="row mt-4">
        <div class="col-sm-3 fw-bold">
          <label class="form-label">Submission Type</label>
        </div>

        <div className="col-sm-8 border border-1">
          <select class="form-control mt-4 w-50">
            <option>Online</option>
          </select>

          <p className="fw-bold mt-4">Online Entry Options</p>

          <div className="form-check mt-4">
            <input
              type="checkbox"
              checked={textArea}
              onChange={() => setTextArea(!textArea)}
              className="form-check-input"
            />
            <label className="form-check-label">Text Area</label>
          </div>

          <div className="form-check mt-4">
            <input
              type="checkbox"
              checked={websiteUrl}
              onChange={() => setWebsiteUrl(!websiteUrl)}
              className="form-check-input"
            />
            <label className="form-check-label">Website URL</label>
          </div>

          <div className="form-check mt-4">
            <input
              type="checkbox"
              checked={media}
              onChange={() => setMedia(!media)}
              className="form-check-input"
            />
            <label className="form-check-label">Media Recordings</label>
          </div>

          <div className="form-check mt-4">
            <input
              type="checkbox"
              checked={annotations}
              onChange={() => setAnnotations(!annotations)}
              className="form-check-input"
            />
            <label className="form-check-label">Student Annotation</label>
          </div>

          <div className="form-check mt-4">
            <input
              type="checkbox"
              checked={uploads}
              onChange={() => setUploads(!uploads)}
              className="form-check-input"
            />
            <label className="form-check-label">File Uploads</label>
          </div>

          {/* other checkboxes ... */}
        </div>
      </div>

      <div className="row mt-4">
        <div class="col-sm-3 fw-bold">
          <label class="form-label">Assign</label>
        </div>

        <div className="col-sm-8 border border-1">
          <p className="fw-bold mt-4">Assign to</p>
          <textarea
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="form-control"
            rows="1"
            placeholder="Everyone"
          />

          <p className="fw-bold mt-4">Due</p>
          <input
            type="date"
            value={dueDate}
            placeholder="01/01/2021"
            onChange={(e) => setDueDate(e.target.value)}
            className="form-control"
          />

          <div className="d-flex justify-content-around">
            <p className="fw-bold mt-4">Available from</p>
            <p className="fw-bold mt-4">Until</p>
          </div>

          <div className="d-flex">
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="form-control"
            />

            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="form-control"
            />
          </div>

          <button
            className="btn btn-secondary gray-btn mt-4"
            style={{ width: "100%" }}
          >
            Add
          </button>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col d-flex justify-content-between mb-5">
          <div className="form-check">
            <input
              type="checkbox"
              checked={notify}
              onChange={() => setNotify(!notify)}
              className="form-check-input"
            />
            <label className="form-check-label">Notify users of changes</label>
          </div>

          <div>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
              <button className="btn btn-secondary ps-2">Cancel</button>
            </Link>

            <button onClick={() => dispatch(addAssignment({ ...assignment, assignment: assignmentId }))}
 className="btn btn-danger me-2">
              Save
            </button>

            {/* <button className="btn btn-danger ps-2">Save</button> */}
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;
