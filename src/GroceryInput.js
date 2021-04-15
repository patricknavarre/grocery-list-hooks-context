import React, { useState, useContext } from 'react';
import { GroceryInputContext } from "./context/context";


const GroceryInput = () => {

    const { addGrocery } = useContext(GroceryInputContext)

    const { grocery, setGrocery } = useState("")

    function handleGrocerySubmit(event) {
        event.preventDefault();

        addGrocery(grocery)
    }

    console.log(17);

    return (
        <form onSubmit={handleGrocerySubmit}>
            <input type="text"
            value={grocery}
            onChange={(e) => setGrocery(e.target.value)} />
            <button type="submit">SUBMIT GROCERY</button>
        </form>
    )
}

export default GroceryInput;