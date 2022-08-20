import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from "@mui/material";

export const ItemCount= ({stock, initial, onAdd}) => {
const [counter, setCounter] = useState(initial);

    return(
    <>
        <Button size="small"
            onClick={() => {setCounter(counter-1)}} disabled={counter === initial}
        >
        - 
        </Button>
        <span>{counter}</span>
        <Button size="small"
            onClick={() => {setCounter(counter+1)}} disabled={counter === stock}
        >
        +
        </Button>
            <Button onClick={() => onAdd(counter)} variant="outlined" startIcon={<AddShoppingCartIcon sx={{ color: 'black'}}/>} sx={{width:'100%'}}>
                Add to cart
            </Button>
    </> 
    );
};