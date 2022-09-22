import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchDetails } from "../FetchingApi/useFetchDetails";
import { Edit } from "./Edit";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface secData {
  question: string;
  answer: string;
  modifyInfo: string;
}

export const Details = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  // const [secondaryData, setSecondary] = useState<secData[]>([]);
  let [secondaryData, setSecondary] = useState<any>();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const { Details, kFetch } = useFetchDetails();
  useEffect(() => {
    kFetch(`http://localhost:5000/questions/${id}`);
  }, [id, kFetch]);

  const handleEdit = () => {
    return null;
  };
  const MySwal = withReactContent(Swal);
  const handleDelete = () => {
    console.log("delete", id);
    const requestOptions = {
      method: "delete",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`http://localhost:5000/questions/${id}`, requestOptions)
      .then((response) => response)
      .then((res) =>
        MySwal.fire({
          position: "center",
          icon: "success",
          title: '"Question Answer Delete!',
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

    navigate("/");
  };

  const showEditedInfo = async () => {
    // setDateLog(Details.Item.dateLog.split(","));
    if (Details.Item.secondary.length === 0) {
      Toast.fire({
        icon: "error",
        title: "No Edit History found",
      });
    } else {
      setSecondary(Details.Item.secondary);
      // console.log("secondary Data", secondaryData);
    }
  };

  console.log(Details);

  const { auth, setAuth }: any = useAuth();

  if (auth.role === "User")
    return (
      <>
        {Details && (
          <div className="container-fluid">
            <div className="row mt-3 ">
              <div className="col-lg-8 col-md-8 p-4 ">
                <h3>Question: {Details.Item.question} </h3>
                <h5>Answer: {Details.Item.answer}</h5>
              </div>

              {/* Edited Info and Buttons Panel does not show on User*/}
            </div>
          </div>
        )}
      </>
    );
  else
    return (
      <>
        {Details && (
          <div className="container-fluid">
            <div className="row mt-3 ">
              <div
                className="col-lg-8 col-md-8 p-4 "
                style={{ borderRight: "5px solid black" }}
              >
                <h3>Question: {Details.Item.question} </h3>
                <h5>Answer: {Details.Item.answer}</h5>
              </div>

              {/* Edited Info and Buttons Panel */}

              <div className="col-lg-4 col-md-4">
                <div className="container d-flex justify-content-between mb-4">
                  <Edit details={Details} onEdit={handleEdit} />
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      showEditedInfo();
                    }}
                  >
                    Edited Info
                  </button>
                </div>
                {secondaryData && (
                  <div className="container d-flex justify-content-between ">
                    <ul className="list-group">
                      <p>Last Edited on</p>
                      {secondaryData.map((val: any, key: any) => {
                        // return <li className="list-group-item">{val}</li>;
                        return (
                          <div
                            className="accordion"
                            id="accordionExample"
                            key={val.editId}
                            style={{ marginBottom: "10px" }}
                          >
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id={`heading` + val.editId}
                              >
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse` + val.editId}
                                  aria-expanded="true"
                                  aria-controls={`collapse` + val.editId}
                                >
                                  {val.modifyInfo}
                                </button>
                              </h2>
                              <div
                                id={`collapse` + val.editId}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading` + val.editId}
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  Ques: {val.question}
                                  <br />
                                  Ans: {val.answer}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
};
