import { Link, useParams, useLocation } from "react-router-dom";
import "../../css/menu.css";
import "../../css/sections.css";
import "../../css/index.css";

import { FaBars } from "react-icons/fa";
import { BiGlassesAlt } from "react-icons/bi";

function Breadcrumb({lastPath}) {
  const { courseId } = useParams();
  return (
    <div className="d-none d-md-block">
      <div className="nav-toggle-and-crumbs">
        <button className="nav-toggle-btn red mb-2" style={{ fontSize: 20 }}>
          <FaBars />
        </button>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mt-1 ms-3 mb-3">
          <li className="breadcrumb-item" aria-current="page">
              <Link
                to={`/Kanbas/Courses/${courseId}/`}
                className="breadcrumb-text"
              >
                {courseId}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link
                to={`/Kanbas/Courses/${courseId}/${lastPath}`}
                className="breadcrumb-text"
              >
                {lastPath}
              </Link>
            </li>
          </ol>
        </nav>
        <button className="btn btn-secondary gray-btn ms-auto mb-3">
          <BiGlassesAlt/>Student View
        </button>
      </div>
    </div>
  );
}
export default Breadcrumb;
