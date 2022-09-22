import React, { useEffect } from "react";
import { useFetchMaster } from "../FetchingApi/useFetchMaster";
import { UserEdit } from "./UserEdit";

export const Users = () => {
  let { kFetch, masterData } = useFetchMaster();
  useEffect(() => {
    kFetch("http://localhost:5000/userinfo");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {masterData &&
              masterData.map((data: any, key: number) => {
                return (
                  <tr>
                    <th scope="row">{key + 1}</th>
                    <td>{data.fullName}</td>
                    <td>{data.id}</td>
                    <td>{data.password}</td>
                    <td>{data.rolePosition}</td>
                    <td>
                      <button className="btn btn-sm btn-danger">Delete</button>
                      &nbsp;
                      <UserEdit onClick={data.id} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
