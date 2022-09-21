import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AddQnA = () => {
  const [Question, setQuestion] = useState("");
  const [Answer, setAnswer] = useState("");
  let navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [userInfo, setuserInfo] = useState({
    image: [],
    filepreview: "",
  });

  const handleInputChangeImage = (event: any) => {
    if (event.target.files[0] === undefined) {
      setuserInfo({
        ...userInfo,
        image: [],
        filepreview: "",
      });
    } else {
      setuserInfo({
        ...userInfo,
        image: event.target.files[0],
        filepreview: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleAdd = () => {
    if (Question === "" || Answer === "") {
      alert("please Add all the fields");
      return;
    }
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

    const data = {
      question: Question,
      answer: Answer,
      status: 1,
      dateLog: date,
      secondary: [],
      imageFile: userInfo.image,
    };

    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:5000/Questions", requestOptions)
      .then((response) => response)
      .then((res) =>
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Question Answer Added!",
          text: "You're being rediected to homePage",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .catch((error) => {
        MySwal.fire({
          position: "center",
          icon: "error",
          title: "Oops..  ",
          text: "Something went wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      });

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
                Question<span style={{ color: "red" }}>*</span>
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
                Answer<span style={{ color: "red" }}>*</span>
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
            <div className="my-3">
              <label htmlFor="answer" className="form-label">
                Select Image
              </label>
              <input
                type="file"
                className="form-control"
                name="upload_file"
                onChange={handleInputChangeImage}
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
          <div className="col-lg-6 text-start ">
            {userInfo.filepreview !== "" ? (
              <img
                style={{ marginLeft: "20px" }}
                className="previewimg"
                src={userInfo.filepreview}
                alt="UploadImage"
                width="350"
                height="350"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQnA;
