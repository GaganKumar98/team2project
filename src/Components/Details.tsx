import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "./useFetchData";
import { useFetchDetails } from "./useFetchDetails";
import { Edit } from "./Edit";

export const Details = () => {
  const { id } = useParams();
  //   const { transformedData, kFetch, setTransformedData } = useFetchData();
  const { Details, kFetch, setDetails } = useFetchDetails();
  useEffect(() => {
    kFetch(`http://localhost:5000/questions/${id}`);
  }, []);

  const handleEdit = () => {
    return null;
  };
  const handleDelete = () => {
    return null;
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
