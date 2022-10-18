import "./App.css";
import { useRef, useState } from "react";
import { BsFillDashCircleFill } from "react-icons/bs";

function App() {
  const inputref = useRef(null);
  const [data, setdata] = useState([]);
  const handleClick = () => {
    const newList = data.concat(inputref.current.value);
    inputref.current.value = "";
    setdata(newList);
  };
  const clearAllClick = () => {
    console.log("All clear is clicked");
    setdata([]);
  };
  const deleteItem = ({ item }) => {
    const index = data.indexOf(item);
    const tempArray = [...data];
    if (index > -1) {
      tempArray.splice(index, 1);
    }
    console.log(tempArray);
    setdata(tempArray);
  };
  return (
    <div>
      <h1 style={{ color: "white" }}>To do</h1>
      <div>
        <input ref={inputref} type="text"></input>
        <button onClick={handleClick}>Add</button>
      </div>
      <p>
        {data
          .map((item) => (
            <div style={{ display: "flex" }}>
              <div style={{ color: "white" }}>
                {item}
                <button onClick={() => deleteItem({ item })}>Done</button>
              </div>
            </div>
          ))
          .reverse()}
      </p>
      <button onClick={clearAllClick}>Clear All</button>
    </div>
  );
}

export default App;
