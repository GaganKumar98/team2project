import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = ({
  transformedData,
  kFetch,
  setTransformedData,
  searchTerm,
  setSearchTerm,
}: any) => {
  let navigate = useNavigate();
  const [temp, setTemp] = useState("");

  const searchHandle = (e: any) => {
    e.preventDefault();
    if (temp == "") {
      alert("Please enter the fields ");
      return;
    }
    setSearchTerm(temp.toLowerCase());
    navigate("/results");
  };

  return (
    <>
      <div
        className="container-fluid d-flex  align-items-center justify-content-between header"
        style={{ backgroundColor: " rgb(236, 225, 178)" }}
      >
        <h4>
          {" "}
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Team2{" "}
          </Link>
        </h4>

        <div className="d-flex align-items-center">
          <form className="form-inline my-2 my-lg-1 d-flex mx-5">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(event) => setTemp(event.target.value)}
              // onChange={searchHandle}
            />
            <button className="btn" type="submit" onClick={searchHandle}>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E"
                alt="search"
              />
            </button>
          </form>
          <button
            className="btn btnHeader"
            style={{ backgroundColor: "rgb(127, 189, 255)", margin: "10px" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </button>
          <button
            className="btn btnHeader"
            style={{ backgroundColor: "rgb(127, 189, 255)", margin: "10px" }}
          >
            <Link to="/add" style={{ textDecoration: "none", color: "black" }}>
              Add New
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
