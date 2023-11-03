import {AiOutlinePlus} from "react-icons/ai";
import {FaEllipsisV} from "react-icons/fa";
import { Modal, Form } from 'react-bootstrap';
import { useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../../Database";
import openModal from "../ModuleList";
function BtnBar() {
  // const { courseId } = useParams();
  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({course: courseId,});

  // const [showModal, setShowModal] = useState(false);
  // const openModal = () => setShowModal(true);
  // const closeModal = () => setShowModal(false);
  // const addModule = (module) => {
  
  //   setModules([
  //     { ...module, id: new Date().getTime().toString(), lessons: [] },
  //       ...modules,
  //   ]);
  //   closeModal();
  // };

  return (
    <>
    <div class="mb-1">
      <div class="float-end" style={{whiteSpace:"nowrap"}}>
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
    {/* <Modal show={showModal} onHide={closeModal}>
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
        
        <button className="list-group-item btn btn-secondary" onClick={() => { addModule(module) }}>
Add</button>
        
      </li>
          </Form>
        </Modal.Body>

      </Modal> */}
      </>
  );
}
export default BtnBar;
