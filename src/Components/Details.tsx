import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "./useFetchData";
import { useFetchDetails } from "./useFetchDetails";
import { Edit } from "./Edit";
import { createSemicolonClassElement } from "typescript";
import { captureRejectionSymbol } from "events";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  //   const { transformedData, kFetch, setTransformedData } = useFetchData();
  const { Details, kFetch, setDetails } = useFetchDetails();
  useEffect(() => {
    kFetch(`http://localhost:5000/questions/${id}`);
  }, []);

  const handleEdit = () => {
    return null;
  };
  const MySwal = withReactContent(Swal);
  const handleDelete = () => {
    console.log("delete", id);
    const requestOptions = {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(null),
    };
    fetch(`http://localhost:5000/questions/${id}`, requestOptions)
      .then((response) => response)
      .then((res) =>
        // MySwal.fire(
        //   "Question Answer Delete!",
        //   "You are being redirected to Home Page.",
        //   "success"
        // )
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
    // alert("Data Deleted");
    navigate("/");
  };
  console.log("details ", Details);
  //   console.log("Answer", Details.answer);
  return (
    <>
      {Details && (
        <div className="container-fluid">
          {/* <h1>{id}</h1> */}
          <div className="row my-5">
            <div className="col-md-10">
              <h1>{Details.Item.question}</h1>
              <br />
              <br />
              <div>{Details.Item.answer}</div>
            </div>
            <div className="col-md-2">
              <div className="row">
                <div className="col-md-6">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
                <div className="col-md-6">
                  <Edit details={Details} onEdit={handleEdit} />
                </div>
              </div>

              {/* <button
                className="btn btn-warning btn-sm mx-2"
                onClick={handleEdit}  > Edit button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
