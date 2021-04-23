import "./style.css";
import Image from "./Image";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
const Images = ({ obj, setCurr, setModal, getData }) => {
  return (
    <div className="wrapper">
      <div className="images_container">
        <InfiniteScroll dataLength={obj.length} next={getData} hasMore={true}>
          {obj.map((item, index) => (
            <Image
              item={item}
              index={index}
              setCurr={setCurr}
              setModal={setModal}
            />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Images;
