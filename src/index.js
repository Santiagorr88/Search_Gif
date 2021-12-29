import React from "react";
import ReactDOM from "react-dom";
import GifExpertApp from "./components/GifExpertApp/GifExpertApp";
import "./index.css";

const endPoint = "api.giphy.com/v1/gifs/search";

ReactDOM.render(<GifExpertApp />, document.getElementById("root"));
