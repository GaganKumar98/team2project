import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchDetails } from "../FetchingApi/useFetchDetails";
import { Edit } from "./Edit";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [dateLog, setDateLog] = useState<string[]>();
  const { Details, kFetch } = useFetchDetails();
  useEffect(() => {
    kFetch(`http://localhost:5000/questions/${id}`);
  }, [id,kFetch]);

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

  const showEditedInfo = () => {
    setDateLog(Details.Item.dateLog.split(","));
  }
  return (
    <>
      {Details && (
        <div className="container-fluid">
          <div className="row mt-3 ">
            <div className="col-lg-9 col-md-9 p-4 " style={{ borderRight: "5px solid black" }}>
              <h3>Question: {Details.Item.question}   </h3>
              <h5>Answer: {Details.Item.answer}</h5>

            </div>
            <div className="col-lg-3 col-md-3">
              <div className="container d-flex justify-content-between mb-4">
                <Edit details={Details} onEdit={handleEdit} />
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                <button className="btn btn-info" onClick={() => { showEditedInfo() }}>Edited Info</button>
              </div>
              {dateLog &&
                <div className="container d-flex justify-content-between ">
                  <ul className="list-group">
                    <p>Last Edited on</p>
                    {
                      dateLog.map((val: any, key: any) => {
                        return (
                          <li className="list-group-item">{val}</li>
                          );
                        })
                    }
                  </ul>
                </div>
              }
            </div>
          </div>
        </div>

      )}
    </>
  );
};
