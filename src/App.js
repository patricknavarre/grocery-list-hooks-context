import React, { useEffect, useState } from 'react';
import { GroceryInputContext, GroceryContext } from "./context/context";

import GroceryInput from "./GroceryInput";
import Grocery from "./Grocery";

import './App.css';


let groceryListObj = [
  {
    id: 1,
    grocery: "steak",
    isGrabbed: false,
  },
  {
    id: 2,
    grocery: "nutella",
    isGrabbed: false,
  },
];

function App() {

  const [groceryListArray, setGroceryListArray] = useState(groceryListObj)

  function addGrocery(grocery) {
    console.log(grocery);
  }

  function showGroceryInput() {
    return (
      <GroceryInputContext.Provider value={{ addGrocery }}>
      <GroceryInput />
      </GroceryInputContext.Provider>
    )
  }

  function showGrocery() {
    return groceryListArray.map((item) => {
      return (
        <GroceryContext.Provider
        key={item.id}
        value={{
          groceryItem: item,
        }}>
        <Grocery />
        </GroceryContext.Provider>
      )
    })
  }

  console.log(groceryListArray);

    return (
      <div className="App">
        {showGroceryInput()}
        {showGrocery()}
      </div>
    )
}

export default App;
