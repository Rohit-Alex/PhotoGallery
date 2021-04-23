import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Images from "./component/Images";
import Popup from "./component/Popup";
import axios from "./axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./component/Loading";
function App() {
  const [curr, setCurr] = useState(null);
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState([]);

  async function getData() {
    // const key = process.env.REACT_APP_ACCESSKEY;
    try {
      const res = await axios.get(
        `/photos/random?client_id=8qwuB4Ka6ATLIZPFzzyICXLLqjNCotfGtU5ZWPCWRcA&count=7`
      );
      console.log(res.data);
      setObj([...obj, ...res.data]);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Header />
      <InfiniteScroll
        dataLength={obj.length}
        next={getData}
        hasMore={true}
        loader={<Loading />}
      >
        <Images
          obj={obj}
          setCurr={setCurr}
          setModal={setModal}
          getData={getData}
        />
      </InfiniteScroll>
      <Popup
        obj={obj}
        modal={modal}
        setModal={setModal}
        curr={curr}
        setCurr={setCurr}
      />
    </div>
  );
}

export default App;
