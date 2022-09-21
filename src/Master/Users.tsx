import React from "react";
import { UserEdit } from "./UserEdit";

export const Users = () => {
  return (
    <>
      <div className="container-fluid">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Admin@gmail.com</td>
              <td>123456</td>
              <td>Admin</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  //   onClick={handleDelete}
                >
                  Delete
                </button>
                &nbsp;
                <UserEdit />
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Larry</td>
              <td>User@gmail.com</td>
              <td>123456</td>
              <td>User</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  //   onClick={handleDelete}
                >
                  Delete
                </button>
                &nbsp;
                <UserEdit />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
