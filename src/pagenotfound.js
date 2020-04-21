import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagenotfound.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-primary btn-lg">
                                <span className="glyphicon glyphicon-home"></span>Take Me Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;