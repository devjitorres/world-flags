import Item from "../Item/Item"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ItemList = ({ products }) => {
    return (
            <Box sx={{ flexGrow: 1, p:5, m:1}}>
                <Grid container spacing={4} direction="row" alignItems="center">
                    {products.map(prod => 
                    <Grid item xs={12} sm={6} md={4}>
                        <Item key={prod.id} {...prod} />
                    </Grid>)}
                </Grid>
            </Box>
      );
}

export default ItemList