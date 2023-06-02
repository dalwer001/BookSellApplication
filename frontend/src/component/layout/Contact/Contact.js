import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
    return (
        <div className="contactContainer">
            <a className="mailBtn" href="mailto:shafayet445@gmail.com">
                <Button>CLICK ME!</Button>
            </a>
        </div>
    );
};

export default Contact;
