import React from "react";
import "./style.css";

const Message = (props) => (
    <section className="col-12 p-3 pt-4 mt-5 text-center">
        <h3 className={props.messageClass}>{props.message}</h3>
    </section>
);

export default Message;