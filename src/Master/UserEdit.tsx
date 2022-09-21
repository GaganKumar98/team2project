import React, { useState } from "react";
// import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const UserEdit = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    console.log("Handle Save");
    setShow(false);
    window.location.reload();
  };
  return (
    <>
      <Button className="btn btn-sm btn-warning" onClick={handleShow}>
        Edit
      </Button>

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
                defaultValue={"admin"}
                // readOnly
              />
              <br />
              {/* <label>
                <b> Email</b>
              </label>
              <input
                className="form-control"
                id="Question"
                defaultValue={"admin@gmail.com"}
                readOnly
              /> */}
              {/* <textarea
                className="form-control"
                // defaultValue={details.Item.answer}
                id="Answer"
                // onChange={(e) => {
                //   setAnswer(e.target.value);
                // }}
              ></textarea> */}
              {/* <br />
              <label>
                <b> Password</b>
              </label>
              <input
                className="form-control"
                id="Password"
                defaultValue={"123456"}
              /> */}
              {/* <br /> */}
              <label>
                <b> Role</b>
              </label>
              <select name="Role" className="form-control" id="role">
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
