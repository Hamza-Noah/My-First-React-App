import "jquery/dist/jquery"
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

let links = document.querySelectorAll(".nav-link");
console.log(links);

links.forEach(link => {
  link.addEventListener("clcik", _ => {
    link.getElementsByClassName.color = "red !important"
  })
})
  


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
