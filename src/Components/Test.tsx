import React, { useEffect } from "react";

const Test = ({ transformedData, kFetch }: any) => {
  useEffect(() => {
    kFetch("http://localhost:5000/questions");
  }, []);

  // const [currentPage, setCurrentPage] = useState(1);
  // const postsPerPage = 5;
  // const paginate = (item: number) => {
  //   setCurrentPage(item);
  //   window.scrollTo(0, 0);
  // };
  // const lastIndex: number = currentPage * postsPerPage;
  // const firstIndex: number = lastIndex - postsPerPage;
  // const currentPost =
  //   transformedData && transformedData.slice(firstIndex, lastIndex);

  return (
    <div className="container">
      {/* filter((val:any) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.question.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
            return;
          }). */}

      {transformedData &&
        transformedData.map((data: any) => {
          return (
            <div>
              <div>
                <h2>Question: {data.question}</h2>
                <div>Answer: {data.answer}</div>
              </div>
            </div>
          );
        })}

      {/* {transformedData && (
            <Pagination
              first={postsPerPage}
              last={transformedData.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )} */}
    </div>
  );
};

export default Test;
