import React, { useState } from "react";
import "./index.css";

export default function NavBar() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <nav class="navbar">
        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>

          <div class="menu">
              <h2 className="logo">Atelier.</h2>
            <li>
              <a href="/">Overview</a>
            </li>
            <li class="services">
              <a href="/">Pages</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Template</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </div>
        </ul>
      <button class="btn">Buy Template</button>
      </nav>
    </div>
  );
}
