import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import SweetAlert from "react-bootstrap-sweetalert";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AddQnA = () => {
  const [Question, setQuestion] = useState("");
  const [Answer, setAnswer] = useState("");
  let navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const handleAdd = () => {
    if (Question === "" || Answer == "") {
      alert("please Add all the fields");
      return;
    }
    const data = { question: Question, answer: Answer };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:5000/Questions", requestOptions)
      .then((response) => response)
      .then((res) => console.log(res));
    // alert("Data Inserted");
    MySwal.fire(
      "Question Answer Added!",
      "You are being redirected to Home Page.",
      "success"
    );
    navigate("/");
  };

  return (
    <>
      <div className="container-lg mt-3">
        <div className="row justify-content-center my-3">
          <div className="col-lg-6 text-start">
            <h2 style={{ textAlign: "center" }}>
              Add Q<span style={{ color: "red" }}>n</span>A
            </h2>
            {/* <form> */}
            <div className="mb-3">
              <label htmlFor="question" className="form-label">
                Question
              </label>
              <input
                type="text"
                className="form-control"
                id="question"
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              />
            </div>

            <div className="my-3">
              <label htmlFor="answer" className="form-label">
                Answer
              </label>
              <textarea
                rows={3}
                className="form-control"
                id="answer"
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={handleAdd}
            >
              Add QnA
            </button>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQnA;
