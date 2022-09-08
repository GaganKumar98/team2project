import React, { useEffect } from "react";
import { useFetchResults } from "./useFetchResults";

const Results = ({ searchTerm }: any) => {
  let { results, kFetch, setResults } = useFetchResults();

  useEffect(() => {
    kFetch(`http://localhost:5000/questionsans/${searchTerm}`);
  }, []);

  return (
    <>
      <div className="container">
        {/* {results &&
        results.map((data: any) => {
          return (
            <div>
              <div>
                <h2>Question: {data.question.S}</h2>
                <div>Answer: {data.answer.S}</div>
              </div>
            </div>
          );
        })} */}
        {results &&
          results.map((val: any, key: any) => {
            return (
              <div
                className="accordion"
                id="accordionExample"
                key={key}
                style={{ marginBottom: "10px" }}
              >
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id={`heading` + val.questionId}
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse` + val.questionId}
                      aria-expanded="true"
                      aria-controls={`collapse` + val.questionId}
                    >
                      Question: {val.question.S}
                    </button>
                  </h2>
                  <div
                    id={`collapse` + val.questionId}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading` + val.questionId}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">Answer: {val.answer.S}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Results;
