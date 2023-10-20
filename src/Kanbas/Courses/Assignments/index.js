import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "../../css/menu.css";
import "../../css/sections.css";
import "../../css/index.css";

import { FaEllipsisV } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BiColor, BiEdit } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {IoMdArrowDropdown} from "react-icons/io";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div class="col-lg-9 col-md-8 col-sm-8 d-md-block">
      <div class="mb-5 mt-2 pb-2" style={{ marginRight: 1 }}>
        <div class="float-start">
          <input
            class="form-control"
            type="text"
            placeholder="Search for Assignment"
          ></input>
        </div>
        <div class="float-end">
          <button class="btn btn-secondary gray-btn margin-right-half">
            <AiOutlinePlus />
            Group
          </button>
          <button class="btn btn-danger margin-right-half">
            <AiOutlinePlus />
            Assignment
          </button>
          <button class="btn btn-secondary gray-btn">
            <FaEllipsisV />
          </button>
        </div>
      </div>

      <hr></hr>

      <div class="list-group">
        <li class="list-group-item list-group-item-secondary d-flex align-items-center justify-content-between">
          <div>
            <FaEllipsisV style={{ marginRight: "-10px" }} />
            <FaEllipsisV /> <IoMdArrowDropdown />  ASSIGNMENTS
          </div>
          <div class="d-flex align-items-center">
            <button class="btn rounded-pill border-dark">40% of Total</button>
            <div class="ps-3">
              <AiOutlinePlus />
            </div>
            <div class="ps-3">
              <FaEllipsisV />
            </div>
          </div>
        </li>

        <div class="list-group">
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item list-group-item-action border-left-green d-flex"
            >

              <div style={{ display: "flex", alignItems: "center" }}>
                <FaEllipsisV style={{ marginRight: "-10px" }} />
                <FaEllipsisV />

                <div className="ps-2 pe-2">
                  <BiEdit style={{ fontSize: "1.5em", color: "red" }} />
                </div>
              </div>

              <div class="p-2 flex-grow-1">
                <a
                  class="link-title"
                  href="../assignments/assignmentEditor/edit.html"
                >
                  <h5>{assignment.title}</h5>
                </a>
                <div>{assignment.module}|</div>
                <div>{assignment.deadline}</div>
              </div>

              <div class="float-end p-2 align-self-center">
                <BsCheckCircleFill style={{ color: "green" }} />
                <FaEllipsisV style={{ marginRight: "-10px" }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;
