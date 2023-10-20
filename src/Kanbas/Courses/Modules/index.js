import ModuleList from "./ModuleList";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import BtnBar from "./BtnBar";
function Modules() {
  return (
    <div class="col-lg-9 col-md-8 col-sm-12">
      <BtnBar />
      <hr className="mt-5"></hr>
      <ModuleList />
    </div>
  );
}
export default Modules;
