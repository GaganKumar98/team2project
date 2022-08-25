import JSONDATA from "../MOCK_DATA.json";

export const Home = ({ searchTerm }: any) => {
  const myStyle: any = {
    margin: "10px",
    textAlign: "center",
    paddingBottom: "10px",
  };

  return (
    <div className="container">
      <div>
        <h1 style={myStyle}>
          Question <span style={{ color: "red" }}>&</span> Answer
        </h1>
      </div>

      {JSONDATA.filter((val) => {
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
      })}
    </div>
  );
};
