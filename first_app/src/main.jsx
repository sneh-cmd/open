import React from "react";
import ReactDOM from 'react-dom/client'
import Dos from "./Dos";// inline css file
import About from "./About"; // external css file
import './CSS/style.css'
import 'animate.css'
const mood=ReactDOM.createRoot(document.getElementById("odd"));
mood.render(
    <>
    <h1 className="bob">hello world!</h1>
    <Dos />
    <About />
    </>
)