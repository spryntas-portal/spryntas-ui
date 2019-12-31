import React from "react";
import "./../assets/css/styles.css";
import { Link } from "react-router-dom";

   const error = props => {
       return (
           <div className="errorpage app flex-row align-items-center">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-md-12">
                            <div className="sm-offset-0 xs-offset-0 md-offset-3 offset-3 error-template">
                                <h1>
                                    Oops!</h1>
                                <h2>
                                    Something went to wrong!</h2>
                                <div className="error-details">
                                    Sorry, an error has occured, Requested page not found!
                                </div>
                                <div className="error-actions">
                                    <a href="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                                        Take Me Home </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   );
};

export default error;