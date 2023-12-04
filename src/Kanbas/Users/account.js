import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const signout = async () => {
    await client.signout();
    navigate("/kanbas/signin");
  };
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const save = async () => {
    console.log("acc", account);
    await client.updateUser(account);
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);
  return (
    <div className="container">
      <h1 className="my-3">Accounts</h1>
      {account && (
        <div>
          <input
            className="form-control my-2"
            value={account.password}
            onChange={(e) => setAccount({ ...account, password: e.target.value })}
          />
          <input
            className="form-control my-2"
            value={account.firstName}
            onChange={(e) => setAccount({ ...account, firstName: e.target.value })}
          />
          <input
            className="form-control my-2"
            value={account.lastName}
            onChange={(e) => setAccount({ ...account, lastName: e.target.value })}
          />
          <input
            className="form-control my-2"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            className="form-control my-2"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            className="form-control my-2"
            value={account.role}
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-primary w-100" onClick={save}>
            Save
          </button>
          <div className="my-3">
            <button className="btn btn-danger w-100" onClick={signout}>
              Signout
            </button>
          </div>
          <div className="my-3">
            <Link to="/kanbas/admin/users" className="btn btn-warning w-100">
              Users
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default Account;
