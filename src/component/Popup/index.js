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
            height: "80vh",
            width: "70%",
            borderRadius: 30,
          },
        }}
      >
        <div>
          <ArrowBackIosIcon
            onClick={() =>
              curr === 0 ? setCurr(obj.length - 1) : setCurr(curr - 1)
            }
          />
          <img src={obj[curr]?.urls.regular} alt={curr?.alt_description} />
          <ChevronRightIcon
            onClick={() =>
              curr === obj.length - 1 ? setCurr(0) : setCurr(curr + 1)
            }
          />
        </div>
      </Modal>
    </div>
  );
};

export default Popup;
