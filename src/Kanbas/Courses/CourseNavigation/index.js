import { Link, useParams, useLocation } from "react-router-dom";
import db from "../../Database";
import "../../css/menu.css";
import "../../css/sections.css";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BiFontSize } from "react-icons/bi";
function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Ponapto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div id="side-bar" className="d-none d-md-block col-md-2 section-menu ms-4">
      <p class="ellipsis pt-3">{course.term}</p>
      {links.map((link, index) => (
        <div className="section ">
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`section-item ${
              pathname.includes(link) && "section-item-active"
            }`}
          >
            {index > 7 && (
              <div className="d-flex float-end">
                <AiOutlineEyeInvisible style={{color:"black", fontSize: "23px"}} />
              </div>
            )}
            {link}
          </Link>
        </div>
      ))}
    </div>
  );
}
export default CourseNavigation;
