import axios from "axios";
import DefaultURL from "../utils/GlobalVar";
import headers from "../utils/GlobalToken";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PersonList({ accounts, doSignal }) {
  const[accountToDelete, setAccountToDelete] = useState(null);
  const nav = useNavigate();

  const handleDelete = async (account) => {
    await axios.delete(`${DefaultURL}/user/admin/deleteById/${account.id}`, {
      headers,
    });
    doSignal();
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Delete</th>
          <th scope="col">EditClassroom</th>
        </tr>
      </thead>
      <tbody>
        {accounts &&
          accounts.map((account, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{account.firstName + " " + account.lastName}</td>
              <td>{account.email}</td>
              <td>{account.role}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={()=>{
                    setAccountToDelete(account);
                  }}
                >
                  Delete
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Delete Warning
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Are you sure you want to delete this account?
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(accountToDelete);
                          }
                           
                          }
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              {account?.role === "ROLE_TEACHER" ? (
                <td>
                  <button
                    onClick={() => {
                      nav(`/adminPanel/editClassroomTeacher/${account.id}`);
                    }}
                    type="button"
                    className="btn btn-primary btn-sm mx-5"
                  >
                    Edit
                  </button>
                </td>
              ) : null}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
