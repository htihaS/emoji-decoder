import { useState } from "react";
import "./styles.css";

var DB = {};

export default function App() {
  var [likecount, setlikecount] = useState(0);

  function handleLikeMe() {
    var newlikecount = likecount + 1;
    setlikecount(newlikecount);
  }

  var shoppinglist = ["milk", "coconut", "bread", "soda"];
  function getbackgrounfcolor(index) {
    if (index % 2 === 0) {
      return "green";
    } else return "red";
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={handleLikeMe}>Like me! </button>
      {likecount}
      <h1>Shopping List</h1>
      <ul>
        {shoppinglist.map((item, index) => {
          return (
            <li style={{ backgroundColor: getbackgrounfcolor(index) }}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
