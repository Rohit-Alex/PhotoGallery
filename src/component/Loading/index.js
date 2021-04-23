import React from "react";
import Loader from "react-loader-spinner";
import "./style.css";
const Loading = () => {
  return (
    <div className="spinner_container">
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Loading;
