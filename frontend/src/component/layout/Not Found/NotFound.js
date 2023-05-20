import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";

const NotFound = () => {
    return (
        <div className="PageNotFound">
            <ErrorIcon />

            <Typography>Page Not Found!</Typography>
            <a href="/">Home</a>
        </div>
    );
};

export default NotFound;
