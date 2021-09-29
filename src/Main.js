import axios from "axios";
import React, { useState } from "react";

export const Main = () => {

const [bookArray , setBookArray] = useState([])


  const onclickgoogle = () => {
    alert("Thank you for choosing mobile");
    // console.log(bookArray);
  };

  const onclickemail = () => {
    axios.post('http://nyx.vima.ekt.gr:3000/api/books').then(itm=>{
      // console.log(itm.data.books , "response");
      console.log(itm.data.books);
      setBookArray(itm.data.books)
    })
    .catch(error=>{
      console.log(error);
    })
  };
  return (
    <div className="main-echo">
      <div className="row main__echoo--r no-gutters">
        <div className=" col-lg-5">
          <div className="echo-left">
            <div className="echo-logo">
              <figure>
                <img className="img-fluid" src="assets/img/echo-logo.png"></img>
              </figure>
            </div>
            <div className="left-main">
              <div className=" main-p">
                {" "}
                <h1>Welcome to iECHO</h1>
                <p>Please choose an option to continue</p>
              </div>
              <div
                type="button"
                onClick={onclickemail}
                className="btn echo-btn w-100"
              >
                <span>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </span>
                Continue with Email
              </div>
              <div
                type="button"
                onClick={onclickgoogle}
                className="btn echo-btn w-100 mt-4"
              >
                <span>
                  <i class="fa fa-mobile" aria-hidden="true"></i>
                </span>
                Continue with Mobile
              </div>

              <div className="divison">
                <span>OR</span>
              </div>
              <button
                type="button"
                disabled={true}
                className="btn echo-btn mt-4 w-100"
              >
                <span>
                  <i class="fa fa-google" aria-hidden="true"></i>
                </span>
                Continue with Google
              </button>
              <p className="form-details mt-2">
                By continuing, you accept the <span>Terms of Use</span> and{" "}
                <span>Privacy Policy</span>
              </p>
              <div className="left-bottom">
                <p>
                  Disclaimer: This is an alpha test version of the iECHO
                  website. The software is provided on an "as is" and "as
                  available" basis. ECHO Institute (UNM) or ECHO India do not
                  give any warranties, whether express or implied, as to the
                  suitability or usability of the website.
                </p>
              </div>
              <p className="last"> © 2021 UNM Project ECHO </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 ">
          <div className="echo-right">
            <div className="echo-right-icon">
              <i class="fa fa-question" aria-hidden="true"></i>
            </div>
            <div className="echo-welcome">
              <figure>
                <img
                  className="img-fluid"
                  src="assets/img/welcome-echo.png"
                ></img>
              </figure>
            </div>
            <div className=" echo-wel-data">
              <h1>
                Learn from Experts and <br></br>Share your Expertise
              </h1>
              <p>
                The ECHO model uses a hub-and-spoke <br></br>knowledge-sharing
                approach
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
