import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

export const Edit = ({ details, onEdit }: any) => {
  const [show, setShow] = useState(false);
  const [Question, setQuestion] = useState<React.SetStateAction<any>>();
  const [Answer, setAnswer] = useState<React.SetStateAction<string>>();
  const Did: any = details.Item.questionId;
  let navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    // console.log("secondary Data", details.Item.secondary);
    var newAnswer: any = Answer;
    var newQuestion: any = Question;
    var OldQuestion = details.Item.question;
    var OldAnswer = details.Item.answer;
    var SecondayData: any;
    const current = new Date();
    const currentDateTime = current.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const date =
      `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}` +
      " " +
      `${currentDateTime}`;

    var newDate: any = date + "," + details.Item.dateLog;
    setShow(false);
    console.log(Question);
    if (Question === undefined && Answer === undefined) {
      newQuestion = details.Item.question;
      newAnswer = details.Item.answer;
    }
    if (Question === undefined) {
      // setQuestion(details.Item.question);
      newQuestion = details.Item.question;
    }
    if (Answer === undefined) {
      // setAnswer(details.Item.answer);
      newAnswer = details.Item.answer;
    }
    if (details.Item.Secondary === undefined) {
      console.log("secondary data is undefined");
      SecondayData = date + "         " + OldQuestion + " |/| " + OldAnswer;
    }
    console.log("details.Item.secondary", details.Item.Secondary);
    if (details.Item.Secondary !== undefined) {
      console.log("secondary data is not undefined");
      SecondayData =
        details.Item.Secondary +
        "," +
        date +
        "         " +
        OldQuestion +
        " |/| " +
        OldAnswer;
    }
    const data = {
      question: newQuestion,
      answer: newAnswer,
      id: Did,
      qa: Question + " " + Answer,
      dateLog: newDate,
      Secondary: SecondayData,
    };
    console.log(SecondayData);
    const requestOptions = {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(`http://localhost:5000/questions/${Did}`, requestOptions)
      .then((response) => response)
      .then((res) =>
        MySwal.fire({
          position: "center",
          icon: "success",
          title: '"Question Answer Edit Sucessfully!',
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .catch((error) => {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });

    navigate(`/Details/${Did}`);
  };

  return (
    <>
      <Button className="btn btn-sm btn-Primary" onClick={handleShow}>
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
    </>
  );
};
