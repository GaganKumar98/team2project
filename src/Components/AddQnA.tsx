import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useFetchData } from "./useFetchData";
const AddQnA = () => {
  const [Question, setQuestion] = useState("");
  const [Answer, setAnswer] = useState("");
  let navigate = useNavigate();
  // let {transformedData,setTransformedData}=useFetchData()
  // console.log(transformedData)
  const handleAdd = () => {
    // const newData:any={
    // 		id:1000,
    // 		questions:Question,
    // 		answers:Answer
    // 		  }
    // const getData=JSON.stringify(newData);
    // console.log(getData)
    // fetch('http://localhost:5000/Questions', {
    // 	method: 'POST',
    // 	body: getData
    //   })

    const data = { questions: Question, answers: Answer };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:5000/Questions", requestOptions)
      .then((response) => response)
      .then((res) => console.log(res));
    alert("Data Insert");
    navigate("/");
    // 	console.log("handle Add")
    // 	console.log(Question)
    // 	console.log(Answer)
    // 	const newData:any={
    // 		userId:1,
    // 		id:1,
    // 		title:Question,
    // 		body:Answer
    // 	  }
    // 	  console.log(typeof(transformedData))
    // 	setTransformedData(()=>[...transformedData,newData]
    // 	)
  };
  // console.log(typeof(transformedData))
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
