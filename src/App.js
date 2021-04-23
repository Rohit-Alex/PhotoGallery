import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Images from "./component/Images";
import Popup from "./component/Popup";
import axios from "./axios";

function App() {
  const [curr, setCurr] = useState(null);
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState([]);
  async function getData() {
    try {
      const res = await axios.get(
        `/photos/random?client_id=8qwuB4Ka6ATLIZPFzzyICXLLqjNCotfGtU5ZWPCWRcA&count=5`
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
      <Images
        obj={obj}
        setCurr={setCurr}
        setModal={setModal}
        getData={getData}
      />
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
