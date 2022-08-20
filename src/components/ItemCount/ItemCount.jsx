import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const ItemCount= ({stock, initial, onAdd}) => {
const [counter, setCounter] = useState(initial);

    return(
        <>
        <Fab color="primary" aria-label="remove" size="small"
            onClick={() => {setCounter(counter-1)}} disabled={counter === initial}
            sx={{ backgroundColor: "white", color: "black"}}
        >
            <RemoveIcon />
        </Fab>
        <div>
            <span>{counter}</span>
        </div>
        <Fab color="primary" aria-label="add" size="small"
            onClick={() => {setCounter(counter+1)}} disabled={counter === stock}
            sx={{ backgroundColor:"black" }}
        >
            <AddIcon />
        </Fab>
            <Button onClick={() => onAdd(counter)} variant="contained" startIcon={<AddShoppingCartIcon sx={{ color: 'black'}}/>} sx={{ backgroundColor:"white", color: "black", width: "70%"}}>
                Add to cart
            </Button>
        </>
    );
};