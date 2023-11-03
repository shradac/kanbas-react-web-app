
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Assignments from "./Courses/Assignments";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";


function Kanbas() {
  const [courses, setCourses] = useState(db.courses);

  const [course, setCourse] = useState({ });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  };

  const deleteCourse = (id) => {
    const newCourses = courses.filter((course) => course._id !== id);
    setCourses(newCourses);
  };
  const updateCourse = (course) => {
    const newCourses = courses.map((item) =>
      item._id === course._id ? course : item
    );
    setCourses(newCourses);
    setCourse({ name: "" });
  }
  return (

    <Provider store={store}>

   

    <div className="wd-flex-row-container">
      <KanbasNavigation />
      <div class="col" style={{paddingRight:20}}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          {/* <Route path="Dashboard" element={<Dashboard />} /> */}
          <Route path="Dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />  

          <Route path="Courses/" element={<Navigate to="/Kanbas/Courses/RS101/Home" />} />
      
           {/* <Route path="Courses/" element={<Courses courses={courses.name} />} /> */}
      


          <Route path="Courses/:courseId/*"  element={
            <Courses courses={courses} />} />
            
          <Route path="Courses/Assignments/*" element={<Assignments/>} />
        </Routes>
      </div>
    </div>
    </Provider>

    
  );
}
export default Kanbas;

