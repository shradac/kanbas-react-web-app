import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal, Form } from "react-bootstrap";
import db from "../../Database";
import Dropdown from "react-bootstrap/Dropdown";

function ModuleList() {
  const { courseId } = useParams();

  const [modules, setModules] = useState(db.modules);

  const [module, setModule] = useState({ course: courseId });
  const [lesson, setLesson] = useState({ id: new Date().getTime().toString() });
  const courseModules = modules.filter((module) => module.course === courseId);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const addModule = (module) => {
    setModules([
      { ...module, id: new Date().getTime().toString(), lessons: [] },
      ...modules,
    ]);
    closeModal();
  };

  const [showLessonModal, setShowLessonModal] = useState(false);
  const [selectedModuleId, setSelectedModuleId] = useState();

  const openLessonModal = () => {
    setShowLessonModal(true);
  };
  const closeLessonModal = () => setShowLessonModal(false);

  const addLessonModule = (lesson) => {
    const module = modules.find((m) => m.id === selectedModuleId);
    setModules((prevModules) =>
      prevModules.map((m) => {
        if (m.id === selectedModuleId) {
          return {
            ...m,
            lessons: [...m.lessons, lesson],
          };
        } else {
          return m;
        }
      })
    );

    closeLessonModal();
  };
  const [selectedModule, setSelectedModule] = useState(module);
  const [showEditModuleNameModal, setShowEditModuleNameModal] = useState(false);

  const [editedModuleName, setEditedModuleName] = useState("");
  console.log("Module name:", module.name);

  const openEditModuleNameModal = (id) => {
    const module = modules.find((module) => module.id == id);
    setSelectedModule(module);
    console.log("Module name:", module);

    setEditedModuleName(module.name);
    setShowEditModuleNameModal(true);
  };

  const closeEditModuleNameModal = () => {
    setSelectedModule(null);
    // setEditedModuleName("");
    setShowEditModuleNameModal(false);
  };

  const saveEditedModuleName = () => {
    setModules((prevModules) =>
      prevModules.map((module) => {
        if (module.id === selectedModule.id) {
          return {
            ...module,
            name: editedModuleName,
          };
        } else {
          return module;
        }
      })
    );

    closeEditModuleNameModal();
  };

  const deleteModule = (id) => {
    const newModules = modules.filter((module) => module.id !== id);
    setModules(newModules);
  };
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </div>
  ));

  return (
    <>
      <div class="mb-1">
        <div class="float-end" style={{ whiteSpace: "nowrap" }}>
          <button class="btn btn-secondary gray-btn margin-right-half">
            Collapse All
          </button>
          <button class="btn btn-secondary gray-btn margin-right-half ">
            View Progress
          </button>
          <button class="btn btn-secondary gray-btn margin-right-half">
            Publish All
          </button>
          <button class="btn btn-danger margin-right-half" onClick={openModal}>
            <AiOutlinePlus />
            Module
          </button>
          <button class="btn btn-secondary gray-btn">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr className="mt-5"></hr>

      <div>
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Module</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <li className="list-group">
                <div className="list-group-item">
                  <lable>Module Name</lable>
                  <input
                    value={module.name}
                    onChange={(e) =>
                      setModule({
                        ...module,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                <button
                  className="list-group-item btn btn-secondary"
                  onClick={() => {
                    addModule(module);
                  }}
                >
                  Add
                </button>
              </li>
            </Form>
          </Modal.Body>
        </Modal>

        <div>
          <Modal show={showLessonModal} onHide={closeLessonModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add Lesson</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <li className="list-group">
                  <div className="list-group-item">
                    <lable>Lesson Name</lable>
                    <input
                      value={lesson.name}
                      onChange={(e) =>
                        setLesson({
                          ...lesson,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    className="list-group-item btn btn-secondary"
                    onClick={() => {
                      addLessonModule(lesson);
                    }}
                  >
                    Add
                  </button>
                </li>
              </Form>
            </Modal.Body>
          </Modal>
        </div>

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

                <p className="float-end" style={{ display: "inline-flex" }}>
                  <BsFillCheckCircleFill className="text-success me-3" />

                  <AiOutlinePlus
                    className="me-3"
                    onClick={() => {
                      openLessonModal();
                      setSelectedModuleId(module.id);
                    }}
                  />

                  <Dropdown>
                    <Dropdown.Toggle
                      as={CustomToggle}
                      id="dropdown-custom-components"
                    >
                      <FaEllipsisV className="ellipse-colour" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => openEditModuleNameModal(module.id)}
                      >
                        Edit
                      </Dropdown.Item>

                      <Dropdown.Item onClick={() => deleteModule(module.id)}>
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Modal
                    show={showEditModuleNameModal}
                    onHide={closeEditModuleNameModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Module Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <div className="list-group">
                          <div className="list-group-item">
                            <label>Module Name</label>
                            <input
                              value={editedModuleName}
                              onChange={(e) =>
                                setEditedModuleName(e.target.value)
                              }
                            />
                          </div>
                          <button
                            className="list-group-item btn btn-secondary"
                            onClick={saveEditedModuleName}
                          >
                            Save
                          </button>
                        </div>
                      </Form>
                    </Modal.Body>
                  </Modal>

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
      </div>
    </>
  );
}
export default ModuleList;
