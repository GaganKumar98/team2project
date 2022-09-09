import React, { useEffect } from "react";
import { useFetchResults } from "./useFetchResults";

const Results = ({ searchTerm }: any) => {
  let { results, kFetch, setResults } = useFetchResults();

  useEffect(() => {
    kFetch(`http://localhost:5000/questionsans/${searchTerm}`);
  }, [results]);

  return (
    <>
      <div className="container mt-5">
        <div>
          <h3 style={{ marginBottom: "20px" }}>Results</h3>
        </div>

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
                    id={`heading` + val.questionId.S}
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse` + val.questionId.S}
                      aria-expanded="true"
                      aria-controls={`collapse` + val.questionId.S}
                    >
                      Question: {val.question.S}
                    </button>
                  </h2>
                  <div
                    id={`collapse` + val.questionId.S}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading` + val.questionId.S}
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
