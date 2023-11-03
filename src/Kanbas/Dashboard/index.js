import { Link } from "react-router-dom";
import React, { useState } from "react";
import db from "../Database";
import "./index.css";
import { FaPen, FaTrash } from "react-icons/fa";
import CourseList from "./editDash";


function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
  // const [courses, setCourses] = useState(db.courses);

  // const [course, setCourse] = useState({ });
  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  // };

  // const deleteCourse = (id) => {
  //   const newCourses = courses.filter((course) => course._id !== id);
  //   setCourses(newCourses);
  // };
  // const updateCourse = (course) => {
  //   const newCourses = courses.map((item) =>
  //     item._id === course._id ? course : item
  //   );
  //   setCourses(newCourses);
  //   setCourse({ name: "" });
  
  return (
    <div>
      <div class="nav-toggle-and-crumbs">
        <h2>Dashboard</h2>
      </div>
      <div className="form-inline">
        {/* <li className="list-group-item"> */}
        <label>Course Name:</label>
          <input
            placeholder="Web Development"
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <label>Course Number:</label>
         
          <input
           placeholder="CS5160.12345.54321"
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <label>Course Term:</label>
          <input
          placeholder="Fall 2021"
            value={course.term}
            className="form-control"
            onChange={(e) => setCourse({ ...course, term: e.target.value })}
          />
           <label>Course Start:</label>
          <input
          placeholder="2021-09-01"
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
           <label>Course End:</label>
          <input
          placeholder="2021-12-31"
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />

          <button
            class="btn btn-primary card-icon card-icon-button"
            onClick={addNewCourse}
          >
            Add
          </button>

          <button
            class="btn btn-primary card-icon card-icon-button"
            onClick={() => updateCourse(course)}
          >
            Update{" "}
          </button>
        {/* </li> */}
      </div>
      <hr></hr>

      <h4 class="pub-courses">Published Courses ({courses.length})</h4>

      <div class="row">
        <div class="d-flex flex-row flex-wrap">
          {courses.map((course) => (
            <div class="col-sm-3 d-flex d-sm-block mb-4 course-card">
              <div class="card">
                <div class="dropdown card-menu position-absolute top-0 end-0">
                  <button
                    class="card-dots-attributes card-dots-position"
                    type="button"
                  >
                    <i class="fas fa-ellipsis-v"></i>
                  </button>
                </div>
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="list-group-item"
                >
                  <img
                    src="../images/blue.png"
                    class="card-img-top"
                    alt="..."
                  ></img>

                  <div class="card-body">
                    <a href="#" class="card-link">
                      <h5 class="card-title course-title">{course.name}</h5>
                      <p class="card-text card-between-title">
                        {course.number}
                      </p>
                      <p class="card-last-text">{course.term}</p>
                    </a>
                  </div>
                </Link>
                <div>
                  <button
                    class="btn btn-primary card-icon card-icon-button button-margin"
                    onClick={() => setCourse(course)}
                  >
                    <FaPen />
                  </button>
                  <button
                    class="btn btn-primary card-icon card-icon-button button-margin"
                    onClick={() => deleteCourse(course._id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
