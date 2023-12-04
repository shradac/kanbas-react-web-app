import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Assignments from "./Courses/Assignments";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
import Signin from "./Users/signin";
import Signup from "./Users/singup";
import Account from "./Users/account";
import UserTable from "./Users/table";

function Kanbas() {
  return (
    <Provider store={store}>
      <div className="wd-flex-row-container">
        <KanbasNavigation />
        <div class="col" style={{ paddingRight: 20 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route
              path="Courses/"
              element={<Navigate to="/Kanbas/Courses/RS101/Home" />}
            />
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="Courses/Assignments/*" element={<Assignments />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
