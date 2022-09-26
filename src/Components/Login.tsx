import React from "react";
import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
const LOGIN_URL = "logininfo";

const Login = () => {
  const { setAuth }: any = useAuth();

  const navigate = useNavigate();
  const location: any = useLocation();
  const from = location.state?.from?.pathname || "/";

  const emailRef: any = useRef();
  const errRef: any = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  //const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    //console.log(email, pwd);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ id: email, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // const response = await axios.get(LOGIN_URL+email);
      // console.log(response.data.Item);
      // if(response.data.Item.fullName)

      //console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      //const accessToken = response?.data?.accessToken;

      // var role = response.data.Item.rolePosition;
      // var name = response.data.Item.fullName;
      // var id = response.data.Item.id;
      // var password = response.data.Item.password;

      const name = response.data.Item.fullName;
      const id = response.data.Item.id;
      const password = response.data.Item.password;
      const role = response.data.Item.rolePosition;
      // setAuth({name, email, pwd, role, accessToken})
      setAuth({ name, id, password, role });
      // console.log(
      //   "Name: ",
      //   name,
      //   "Email: ",
      //   id,
      //   "Pwd: ",
      //   password,
      //   "Role: ",
      //   role
      // );

      setEmail("");
      setPwd("");
      //setSuccess(true);

      navigate(from, { replace: true });
    } catch (err: any) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Invalid Credentials");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {/* {success ? (
            <section>
                <h1>You are logged In.</h1>
                <br />
                <p>
                <Link to={'/home'}>Go to Home</Link>
                <Link to={'/master'}>master</Link>
                </p>
            </section>
        ) : ( */}
      <div className="App container-fluid">
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 mt-2">
              <form onSubmit={handleSubmit}>
                <div className="card">
                  <div className="card-header  text-center">
                    <h4>Sign In</h4>
                  </div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">
                      <label htmlFor="email">Email </label>
                      <input
                        type="text"
                        id="email"
                        ref={emailRef}
                        autoComplete="nope"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        className="form-control"
                      />
                      <br />
                      <label htmlFor="password">Password </label>
                      <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        className="form-control"
                      />
                    </p>
                    {/* <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                  </div>
                  <div className="card-footer">
                    {" "}
                    <div className="row">
                      <div className="col-md-6">
                        {" "}
                        Need an Account?
                        <span>
                          <Link to={"/register"}>Sign Up</Link>
                          {/* put router link */}
                        </span>
                      </div>
                      <div style={{ textAlign: "right" }} className="col-md-6">
                        <button
                          style={{ backgroundColor: "rgb( 255, 153, 0)" }}
                          className="btn btn-md "
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-4"></div>
          </div>
        </section>
      </div>
      {/* )} */}
    </>
  );
};

export default Login;
