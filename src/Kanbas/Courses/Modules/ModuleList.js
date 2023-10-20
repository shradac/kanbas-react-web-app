import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  const courseModules = modules.filter((module) => module.course === courseId);
  console.log(courseModules);
  return (
    <div style={{ width: "100%" }}>
      {courseModules.map((module, index) => (
        <div className="list-group mb-5">
          <li
            className="list-group-item list-group-item-secondary module-name"
            type="button"
          >
            <FaEllipsisV
              className="ellipse-colour"
              style={{ marginRight: "-10px" }}
            />

            <FaEllipsisV className="ellipse-colour" />
            {module.name}

            <p className="float-end">
              <BsFillCheckCircleFill className="text-success me-3" />

              <AiOutlinePlus className="me-3" />

              <FaEllipsisV className="ellipse-colour" />
            </p>
          </li>

          <div id={`multiCollapse${module.id}`}>
            {module.lessons.map((lesson) => (
              <li className="list-group-item list-group-item-action">
                <FaEllipsisV
                  className="ellipse-colour"
                  style={{ marginRight: "-10px" }}
                />

                <FaEllipsisV className="ellipse-colour" />
                {lesson.name}

                <p className="float-end">
                  <BsFillCheckCircleFill className="text-success me-3" />

                  <AiOutlinePlus className="me-3" />

                  <FaEllipsisV className="ellipse-colour" />
                </p>
              </li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default ModuleList;
