import { useState } from "react";

export const ItemCount= ({stock, initial, onAdd}) => {
const [counter, setCounter] = useState(initial);

    return(
    <>
        <button onClick={() => {setCounter(counter-1)}} disabled={counter === initial}> - </button>
        <span>{counter}</span>
        <button onClick={() => {setCounter(counter+1)}} disabled={counter === stock}> + </button>
        <div>
            <button onClick={() => onAdd(counter)}>Add to cart</button>
        </div>
    </>
    );
};