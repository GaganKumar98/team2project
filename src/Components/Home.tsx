import { useEffect } from "react";
import JSONDATA from "../MOCK_DATA.json";
import { useFetchData } from "./useFetchData";

export const Home = ({ searchTerm }: any) => {
  
  let {transformedData,loading,kFetch,setTransformedData}=useFetchData()

  useEffect(()=>{
    kFetch("http://localhost:5000/Questions")
  },[])

  const myStyle: any = {
    margin: "10px",
    textAlign: "center",
    paddingBottom: "10px",
  };
 
  // console.log("homedata",transformedData)

  return (
    <div className="container">
      <div>
        <h1 style={myStyle}>
          Question <span style={{ color: "red" }}>&</span> Answer
        </h1>
      </div>
      
      {transformedData && transformedData.filter((val:any) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.questions.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
        return;
      }).map((val:any, key:any) => {
        return (
          <div className="accordion" id="accordionExample" key={key}>
            <div className="accordion-item">
              <h2 className="accordion-header" id={`heading` + val.id}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse` + val.id}
                  aria-expanded="true"
                  aria-controls={`collapse` + val.id}
                >
                  {val.questions}
                </button>
              </h2>
              <div
                id={`collapse` + val.id}
                className="accordion-collapse collapse"
                aria-labelledby={`heading` + val.id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{val.answers}</div>
              </div>
            </div>
          </div>
        );
      })}
      {/* {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.question.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
        return;
      }).map((val, key) => {
        return (
          <div className="accordion" id="accordionExample" key={key}>
            <div className="accordion-item">
              <h2 className="accordion-header" id={`heading` + val.id}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse` + val.id}
                  aria-expanded="true"
                  aria-controls={`collapse` + val.id}
                >
                  {val.question}
                </button>
              </h2>
              <div
                id={`collapse` + val.id}
                className="accordion-collapse collapse"
                aria-labelledby={`heading` + val.id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{val.answer}</div>
              </div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};
