import React from "react";
import Modal from "react-modal";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./style.css";
const Popup = ({ obj, modal, setModal, curr, setCurr }) => {
  return (
    <div>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={{
          overlay: {
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(15 14 14 / 82%)",
          },
          content: {
            top: "11vh ",
            right: "4.5vw",
            left: "8.5vw",
            height: "88vh",
            width: "84%",
            padding: 0,
            overflowY: "hidden",
            borderRadius: 30,
            background: "transparent",
            border: "1px solid rgb(210 112 226)",
          },
        }}
      >
        <div className="wrapper_popup">
          <button className="leftCont">
            <ArrowBackIosIcon
              style={{ fontSize: "4.5rem", color: "white" }}
              onClick={() =>
                curr === 0 ? setCurr(obj.length - 1) : setCurr(curr - 1)
              }
            />
          </button>

          <img
            className="mid"
            src={obj[curr]?.urls.regular}
            alt={curr?.alt_description}
          />
          <div className="bottom">
            <MoreHorizIcon style={{ fontSize: "8.5rem", color: "white" }} />
          </div>
          <button className="rightIcon">
            <ChevronRightIcon
              style={{ fontSize: "4.5rem", color: "white" }}
              onClick={() =>
                curr === obj.length - 1 ? setCurr(0) : setCurr(curr + 1)
              }
            />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Popup;
