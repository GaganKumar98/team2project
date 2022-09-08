import { useEffect, useState } from "react";
import { Pagination } from "../services/Pgination";
import { useFetchData } from "./useFetchData";

export const Home = ({ searchTerm }: any) => {
  let { transformedData, kFetch } = useFetchData();

  useEffect(() => {
    kFetch("http://localhost:5000/questions");
  }, []);

  const myStyle: any = {
    margin: "10px",
    textAlign: "center",
    paddingBottom: "10px",
  };

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const paginate = (item: number) => {
    setCurrentPage(item);
    window.scrollTo(0, 0);
  };
  const lastIndex: number = currentPage * postsPerPage;
  const firstIndex: number = lastIndex - postsPerPage;
  const currentPost =
    transformedData && transformedData.slice(firstIndex, lastIndex);

  return (
    <div className="container">
      <div>
        <h1 style={myStyle}>
          Question <span style={{ color: "red" }}>&</span> Answer
        </h1>
      </div>

      {transformedData &&
        currentPost
          .filter((val: any) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.question.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
            return;
          })
          .map((val: any, key: any) => {
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
                      Question: {val.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse` + val.questionId}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading` + val.questionId}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">Answer: {val.answer}</div>
                  </div>
                </div>
              </div>
            );
          })}

      {transformedData && (
        <Pagination
          first={postsPerPage}
          last={transformedData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};
