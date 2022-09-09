// import { Button } from "@material-ui/core";
import { Input } from "@material-ui/core";
import React, { SetStateAction, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Edit = ({ details, onEdit }: any) => {
  const [show, setShow] = useState(false);
  const [Question, setQuestion] = useState<React.SetStateAction<any>>();
  const [Answer, setAnswer] = useState<React.SetStateAction<string>>();
  const Did: any = details.Item.questionId;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    setShow(false);
    console.log(Question);
    if (Question === undefined && Answer === undefined) {
      console.log("heelo");
      return;
    }
    const data = {
      question: Question,
      answer: Answer,
      id: Did,
      qa: Question + " " + Answer,
    };
    const requestOptions = {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(`http://localhost:5000/questions/${Did}`, requestOptions)
      .then((response) => response)
      .then((res) => console.log(res));
    alert("Data Updated");
  };

  return (
    <>
      <Button className="btn btn-warning btn-sm mx-2" onClick={handleShow}>
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
                <b>Question</b>
              </label>
              <textarea
                className="form-control"
                defaultValue={details.Item.question}
                id="Question"
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              ></textarea>
              <br />
              <label>
                <b> Answer</b>
              </label>
              <textarea
                className="form-control"
                defaultValue={details.Item.answer}
                id="Answer"
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
              ></textarea>
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
      {/* <div>
      <button
        type="button"
        className="btn btn-warning   btn-sm"
        data-toggle="modal"
        data-target="#EditModal"
        data-whatever=""
      >
        Edit
      </button>
      <div
        className="modal fade"
        id="EditModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New message
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Recipient:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};
