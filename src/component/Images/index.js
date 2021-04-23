import "./style.css";
import Image from "./Image";

import Loader from "../Loader";
const Images = ({ obj, setCurr, setModal, getData }) => {
  return (
    <div className="wrapper">
      <div className="images_container">
        {obj.map((item, index) => (
          <Image
            item={item}
            index={index}
            setCurr={setCurr}
            setModal={setModal}
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
