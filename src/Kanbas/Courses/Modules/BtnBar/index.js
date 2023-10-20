import {AiOutlinePlus} from "react-icons/ai";
import {FaEllipsisV} from "react-icons/fa";
function BtnBar() {
  return (
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
        <button class="btn btn-danger margin-right-half">
          <AiOutlinePlus />
          Module
        </button>
        <button class="btn btn-secondary gray-btn">
          <FaEllipsisV />
        </button>
      </div>
    </div>
  );
}
export default BtnBar;
