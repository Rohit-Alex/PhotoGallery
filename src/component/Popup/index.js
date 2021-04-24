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
          <button
            className="leftCont"
            onClick={() =>
              curr === 0 ? setCurr(obj.length - 1) : setCurr(curr - 1)
            }
          >
            <ArrowBackIosIcon style={{ fontSize: "4.5rem", color: "white" }} />
          </button>

          <img
            className="mid"
            src={obj[curr]?.urls.full}
            alt={curr?.alt_description}
          />
          <div className="bottom">
            <MoreHorizIcon style={{ fontSize: "6.5rem", color: "white" }} />
          </div>
          <button
            className="rightIcon"
            onClick={() =>
              curr === obj.length - 1 ? setCurr(0) : setCurr(curr + 1)
            }
          >
            <ChevronRightIcon style={{ fontSize: "5.5rem", color: "white" }} />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Popup;
