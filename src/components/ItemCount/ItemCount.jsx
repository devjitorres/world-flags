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
                <span style={{paddingLeft:"5px", fontSize:"large"}}>{counter}</span>
            </div>
            <Fab color="primary" aria-label="add" size="small"
                onClick={() => {setCounter(counter+1)}} disabled={counter === stock | stock === 0}
                sx={{ backgroundColor:"black" }}
            >
            <AddIcon />
            </Fab>
                    {
                    stock === 0
                    ?  <Button size="small"
                            disabled= "true" variant="contained"  sx={{ justifyContent: "center", backgroundColor:"white", color: "black", width: "70%"}}>
                            <p>Not available</p>
                        </Button>
                    :   <Button size="small" onClick={() => onAdd(counter)}
                            variant="contained"  sx={{ justifyContent: "center", backgroundColor:"white", color: "black", width: "70%"}}>
                            <AddShoppingCartIcon sx={{ position: "absolute", right:"73%", color: 'black'}}/> 
                            <p style={{ paddingLeft: "25px" }}>Add to cart</p>
                        </Button>
                    }   

        </>
    );
};