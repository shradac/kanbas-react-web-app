import React, { useState } from "react";
import db from "../Database";

function CourseList() {
  const [courses, setCourses] = useState(db.courses);

  const [course, setCourse] = useState({ name: "Learn Mongo" });

  const addCourse = (course) => {
    const newCourses = [ ...courses, { ...course,
      _id: new Date().getTime().toString() }];
    setCourses(newCourses);
    setCourse({name: ""});
  };
  const deleteCourse = (id) => {
    const newCourses = courses.filter((course) => course._id !== id);
    setCourses(newCourses);
  };
  const updateCourse = (course) => {
    const newCourses = courses.map((item) =>
      (item._id === course._id ? course : item));
    setCourses(newCourses);
    setCourse({name: ""});
  };
  return (
    <div>
      <h2>Edit Courses</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <button onClick={() => addCourse(course)}>Add</button>
          <button onClick={() => updateCourse(course)}>
            Update </button>
          <input
            value={course.name}
            onChange={(e) =>
              setCourse({
                ...course,
                name: e.target.value,
              })
            }
          />
        </li>
        {courses.map((course) => (
          <li key={course._id} className="list-group-item">
            <button onClick={() => deleteCourse(course._id)}>
              Delete </button>
            <button onClick={() => setCourse(course)}>
              Edit </button>
            {course.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CourseList;