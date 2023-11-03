import ModuleList from "../Modules/ModuleList";
import BtnBar from "../Modules/BtnBar";
import Status from "./Status";
function Home() {
  return (
    <>
      <div class="col-xl-7 col-lg-9 col-md-8 col-sm-12">
        <ModuleList />
      </div>
      <Status />
    </>
  );
}
export default Home;