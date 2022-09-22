import React, { useEffect, useState } from "react";
import { useFetchMaster } from "../FetchingApi/useFetchMaster";
import { UserEdit } from "./UserEdit";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export const Users = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const MySwal = withReactContent(Swal);



  let { kFetch, masterData } = useFetchMaster();
  useEffect(() => {
    kFetch("http://localhost:5000/userinfo");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  const handleEdit=()=>{
    

  }
  const handleSave = () => {

  }

 

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

            {masterData && masterData.map((data: any,key:number) => {
              return (
                <tr>
                  <th scope="row">{key+1}</th>
                  <td>{data.fullName}</td>
                  <td>{data.id}</td>
                  <td>{data.password}</td>
                  <td>{data.rolePosition}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                    
                    >
                      Delete
                    </button>
                    &nbsp;
                    {/* <UserEdit id={data.id} /> */}
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={handleShow}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              <label>
                <b>Name</b>
              </label>
              <input
                className="form-control"
                id="Question"
                defaultValue=""
                

              // readOnly
              />
              <br />

              <label>
                <b> Role</b>
              </label>
              <select name="Role" className="form-control" id="role" >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
