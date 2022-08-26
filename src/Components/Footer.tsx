import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid mt-5 "
        style={{ margin: "0px", padding: "0px", marginBottom: "0px" }}
      >
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#3e4551" }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">FOOTER CONTENT</h5>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae modi cum ipsam ad, illo possimus laborum ut
                    reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur
                    eaque? Reiciendis assumenda iusto sapiente inventore animi?
                  </p>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <p
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <p>
              <a
                className="text-white"
                href="https://nagarro.com/"
                style={{ textDecoration: "none" }}
              >
                Nagarro
              </a>
              &nbsp;© 2022. All rights reserved.
            </p>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
