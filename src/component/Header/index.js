import React, { useEffect, useState } from "react";
import "./style.css";
const Header = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) setShow(true);
      else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div>
      <div className={`${show ? "header" : "header_dark"}`}>
        <h1>Gallery App</h1>
      </div>
    </div>
  );
};

export default Header;
