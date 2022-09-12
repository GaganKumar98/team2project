import { colors } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../services/Pgination";

export const Home = ({ transformedData, kFetch }: any) => {
  useEffect(() => {
    kFetch("http://localhost:5000/questions");
  }, []);

  const myStyle: any = {
    margin: "10px",
    textAlign: "center",
    paddingBottom: "10px",
  };
  const cardStyle: any = {
    borderRadius: "10px",
    backgroundImage: "linear-gradient(to right, #F0E68C , #FBCEB1)",
    height: "165px",
  };
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
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
      <div className="row">
        {transformedData &&
          currentPost.map((val: any, key: any) => {
            return (
              <div className="col-lg-4 mb-4">
                <div style={cardStyle} className="card">
                  <div className="card-body">
                    <h5 className="card-title">{val.question}</h5>
                    <p
                      className="card-text text-truncate"
                      style={{ maxWidth: "700px" }}
                    >
                      {val.answer}{" "}
                    </p>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/Details/${val.questionId}`}
                    >
                      Read More...
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
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
