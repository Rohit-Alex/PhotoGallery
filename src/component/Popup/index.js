import React from "react";
import Modal from "react-modal";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
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
          },
          content: {
            left: "9.5vw",
            right: "4.5vw",
            height: "92vh",
            width: "80%",
            overflowY: "hidden",
            borderRadius: 30,
            backgroundColor: "#877e7e38",
          },
        }}
      >
        <div className="wrapper_popup">
          <button className="leftCont">
            <ArrowBackIosIcon
              style={{ fontSize: "4.5rem" }}
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
          <button className="rightIcon">
            <ChevronRightIcon
              style={{ fontSize: "5.5rem" }}
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
