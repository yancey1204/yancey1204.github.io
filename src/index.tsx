import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import md from "./blogs/2021-05-15-dynamic-programming-with-fibonacci-sequence.md";


ReactDOM.render(
    <React.StrictMode>
        <div dangerouslySetInnerHTML={{ __html: md }}></div>
    </React.StrictMode>,
    document.getElementById("root"),
);
