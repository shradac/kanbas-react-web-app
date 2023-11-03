import ModuleList from "./ModuleList";
import BtnBar from "./BtnBar";
import { useParams } from "react-router-dom";
function Modules() {
  const { courseId } = useParams();
  return (
    <div class="col-lg-9 col-md-8 col-sm-12">
      {/* <BtnBar /> */}
      {/* <hr className="mt-5"></hr> */}
      <ModuleList />
    </div>
  );
}
export default Modules;
